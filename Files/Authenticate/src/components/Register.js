import React, { Component } from 'react';
import addUser from '../controller.js';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {username: '', password: '', errorMessage: ''};

    this.register = this.register.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  register(event) {
    event.preventDefault();
    addUser.register(this.state);
  }

  handleChange(event) {
    event.preventDefault();
    const tempState = this.state;
    tempState[event.target.name] = event.target.value;
    this.setState(tempState);
  }


  render() {
    return (
      <div>
        <h1>Register Page!!!</h1>
          {this.state.errorMessage ? <p>{this.state.errorMessage}</p> : null}
          <br />
          <form onSubmit={this.register}>
            <div>
              <input type="text" placeholder="What will be your username?" value={this.state.username} onChange={this.handleChange} name="username" />
            </div>
            <p></p>
            <div>
              <input type="password" placeholder="What will be your Password?" value={this.state.password} onChange={this.handleChange} name="password" />
            </div>
            <p></p>
            <button type="submit" className="btn-primary raised:active">SUBMIT</button>
          </form>
        </div>

    )
  }
}

export default Register;
