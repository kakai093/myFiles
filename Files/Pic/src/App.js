import React, { Component } from 'react';
import addMessage from './controller.js';
import Posts from './messages.js';
import $ from 'jquery';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {title: '', posts: [], imagePreview: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openFile = this.openFile.bind(this);
  }

  componentWillMount() {
    $.ajax({
      type: 'GET',
      url: "http://localhost:3020/messages",
      dataType: 'json',
      success: function(data) {
        this.setState({ posts: data });
      }.bind(this)
    });
  }

  handleChange(event) {
    this.setState({title: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    addMessage(this.state.title, this.state.imagePreview);
    alert("Succesfully Saved Message");
  }

  openFile(event) {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreview: reader.result
      });
    }

    reader.readAsDataURL(file)

  }

  render() {
    const { posts, imagePreview } = this.state;

    return (
      <div className="App">
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Message:  </label>
            <input type="text" value={this.state.title} onChange={this.handleChange} name="title"/>
            <p><input type='file' accept='image/*' onChange={this.openFile} /></p>
            {
              imagePreview ?
              <span><img src={imagePreview} alt="" /></span>
              :
              <span></span>
            }
              <button type="submit" className="btn-primary raised:active">SUBMIT</button>
          </form>
      </div>
      <div>
        <p> <strong> My Messages!! </strong></p>
          {
            posts && posts.length > 0 ?
            <Posts posts={posts} />
            :
            <div>
              <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
              <span className="sr-only">Loading...</span>
            </div>
          }
      </div>
      </div>
    );
  }
}

export default App;
