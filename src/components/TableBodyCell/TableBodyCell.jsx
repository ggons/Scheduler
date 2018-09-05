import React from 'react';
import { TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';
import { getDayInfo } from 'utils/date';

const styles = {
  tableCell: {
    height: 100,
    padding: 5,
    paddingRight: '5px !important',
    verticalAlign: 'top'
  },
  p: {
    position: 'relative'
  },
  holidayName: {
    right: 0,
    position: 'absolute'
  },
  exday: {
    opacity: .3
  },
  holiday: {
    color: deepOrange[500]
  }
}

function renderDay({ date }) {
  return date > 9 ? date : '0' + date;
}

const TableBodyCell = ({ classes, day, onDateClick, onScheduleClick, ...rest }) => {
  // 이전 달, 다음 달 표시 (dim)
  const exday = isExday(day) ? classes.exday : '';

  let holiday = '';
  const { isHoliday, name: holidayName } = getDayInfo(day);
  if (isHoliday) {
    holiday = classes.holiday;
  }

  return (  
    <TableCell 
      className={`${classes.tableCell} ${exday} ${holiday}`} 
      onClick={() => onDateClick(day) }
    >
      <p className={classes.p}>
        { holidayName && <span className={classes.holidayName}>{holidayName}</span>}
        <span onClick={onScheduleClick}>{ renderDay(day) }</span>
      </p>
    </TableCell>
  );
}

function isExday(day) {
  return day.nm || day.pm;
}
 
export default withStyles(styles)(TableBodyCell);