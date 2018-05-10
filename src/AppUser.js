import React, { Component } from 'react';
import './App.css';
import Users from './users/Users';

class AppUser extends Component {
  render() {
    return (
      <div className="AppUser">
        <Users/>
      </div>
    );
  }
}

export default AppUser;
