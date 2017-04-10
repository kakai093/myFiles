import React, { Component } from 'react';

class DashBoard extends Component {

  logout() {
    window.localStorage.removeItem('token');
    window.location.href="/";
  }

  render () {
    return (
      <div>
        <h1>My Dash Board!!!!</h1>
        <hr />
        <h3><a className="btn" href="#" onClick={this.logout.bind(this)}>Logout</a></h3>
      </div>
    )
  }
}

export default DashBoard;
