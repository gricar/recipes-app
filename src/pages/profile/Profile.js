import React from 'react';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';

function Profile() {
  return (
    <div>
      <Header title="Profile" searchBtn={ false } />
      <p>Profile</p>
      <BottonMenu />
    </div>
  );
}

export default Profile;
