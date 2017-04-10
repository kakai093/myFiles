import React, { Component } from 'react';
import { Link } from 'react-router';



class Navigation extends Component {
  render () {
    return (
      <div>
        <ul>
          <li><Link to="dashBoard"> Dash Board</Link></li>
          <li><Link to="loginPage"> Login Here</Link></li>
        </ul>
      </div>
    )
  }
}

export default Navigation;
