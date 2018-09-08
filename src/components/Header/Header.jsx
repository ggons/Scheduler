import React from 'react';
import { Button } from '@material-ui/core';
import LeftIcon from '@material-ui/icons/NavigateBefore';
import RightIcon from '@material-ui/icons/NavigateNext';
import moment from 'moment';

const Header = ({ currentDate, onPrevClick, onNextClick }) => {
  const formatDate = moment(currentDate).format('YYYY MM');

  return (  
    <div style={{ textAlign: "center" }}>
      <Button aria-label="Prev" onClick={onPrevClick}>
        <LeftIcon />
      </Button>
      <span>{formatDate}</span>
      <Button aria-label="Next" onClick={onNextClick}>
        <RightIcon />
      </Button>
    </div>
  );
}
 
export default Header;