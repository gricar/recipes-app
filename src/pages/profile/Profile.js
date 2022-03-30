import React, { Component } from 'react';
import Header from '../../components/header/Header';

class Profile extends Component {
  render() {
    return (
      <div>
        <Header title="Profile" searchBtn={ false } />
        <p>oi do Profile temporário</p>
      </div>
    );
  }
}

export default Profile;
