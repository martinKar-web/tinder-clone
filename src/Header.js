import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import {Link, useHistory} from 'react-router-dom';
import './Header.css';

const Header = ({backButton}) => {
  const history = useHistory();

  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon
            fontSize="large"
            className="header__icon"
          />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
      )}

      <Link to="/">
        {/* tinder logo */}
        <img
          className="header__logo"
          src="https://boostmatches.com/wp-content/uploads/2020/06/Tinder-New-Company-Logo-Flame.png"
          alt="tinder-logo"
        />
      </Link>

      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;

//https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png';
