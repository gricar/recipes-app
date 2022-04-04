import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';
import { getStorage } from '../../services/SetAndGetStorage';
import './Profile.css';

function Profile({ history }) {
  const [user, setEmail] = useState({});

  useEffect(() => {
    setEmail(getStorage('user'));
  }, []);

  return (
    <section>
      <Header title="Profile" searchBtn={ false } />
      <div className="profile">
        <p data-testid="profile-email">{ user.email }</p>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => { history.push('/'); localStorage.clear(); } }
        >
          Logout
        </button>
      </div>
      <BottonMenu />
    </section>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Profile;
