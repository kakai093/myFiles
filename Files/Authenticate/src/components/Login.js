import React, { Component } from 'react';
import addUser from '../controller.js';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};

    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  login(event) {
    event.preventDefault();
    addUser.login(this.state);
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
        <h1>Log-in Page!!!</h1>
          <div>
             <br />
             <form onSubmit={this.login}>
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
      </div>
    )
  }
}

export default Login;
