import React from 'react';
import { TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { deepOrange, cyan } from '@material-ui/core/colors';
import { getDayInfo } from 'utils/date';

const styles = {
  tableCell: {
    height: 100,
    padding: 5,
    paddingRight: '5px !important',
    verticalAlign: 'top',
    position: 'relative'
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
  },
  schedule: {
    position: 'absolute',
    backgroundColor: cyan['A400'],
    borderRadius: 3,
    padding: '0 5px',
    height: 20,
    lineHeight: '20px'
  }
}
const columnWidth = 95;

const TableBodyCell = ({ classes, day, scheduleList, onDateClick, onScheduleClick, ...rest }) => {
  // 이전 달, 다음 달 표시 (dim)
  const exday = isExday(day) ? classes.exday : '';

  let holiday = '';
  const { isHoliday, name: holidayName } = getDayInfo(day);
  if (isHoliday) holiday = classes.holiday;

  const renderDay = () => {
    const { date } = day;
    return date > 9 ? date : '0' + date;
  }
  
  const renderSchedule = () => {
    return scheduleList.map((schedule, i) => {
      const { title, display, row, width } = schedule;
      if (!display) return null;
  
      return (
        <div 
          className={classes.schedule}
          style={{
            width: (columnWidth + (100 * (width - 1))) + '%',
            top: 25 + (row * 25)
          }}
          onClick={e => onScheduleClick(e)}
          key={i}
        >
          {title}
        </div>
      )
    })
  }
  
  return (  
    <TableCell 
      className={classes.tableCell}
      onClick={() => onDateClick(day) }
    >
      <p className={`${classes.p} ${exday} ${holiday}`}>
        { holidayName && <span className={classes.holidayName}>{holidayName}</span>}
        <span>{ renderDay(day) }</span>
      </p>
      {
        renderSchedule()
      }
    </TableCell>
  );
}

function isExday(day) {
  return day.nm || day.pm;
}
 
export default withStyles(styles)(TableBodyCell);