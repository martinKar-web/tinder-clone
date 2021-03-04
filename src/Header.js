import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';

import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>

      {/* tinder logo */}
      <img
        className="header__logo"
        src="https://boostmatches.com/wp-content/uploads/2020/06/Tinder-New-Company-Logo-Flame.png"
        alt="tinder-logo"
      />

      <IconButton>
        <ForumIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Header;

//https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png';
