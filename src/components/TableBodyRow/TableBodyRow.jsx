import React from 'react';
import TableBodyCell from 'components/TableBodyCell';
import { TableRow } from '@material-ui/core';

function renderWeek(weekDate, weekSchedule, rest) {
  return weekDate.map((day, i) => 
    <TableBodyCell 
      day={day} 
      scheduleList={weekSchedule[i]} 
      key={day.month + day.date} 
      { ...rest } 
    />
  );
}

const TableBodyRow = ({ weekDate, weekSchedule, ...rest }) => {
  return (  
    <TableRow>
      { renderWeek(weekDate, weekSchedule, rest) }
    </TableRow>
  );
}
 
export default TableBodyRow;