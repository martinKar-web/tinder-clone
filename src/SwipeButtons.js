import React from 'react';

import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

import './SwipeButtons.css';

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon fonSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseIcon fonSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRateIcon fonSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <FavoriteIcon fonSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashOnIcon fonSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
