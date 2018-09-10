import React from 'react';
import TableBodyCell from 'components/Table/TableBodyCell';
import { TableRow } from '@material-ui/core';

const TableBodyRow = ({ weekDate, weekSchedule, ...rest }) => {
  const cells = weekDate.map((day, i) => (
    <TableBodyCell 
      day={day} 
      scheduleList={weekSchedule[i]} 
      key={day.month + day.date} 
      { ...rest } 
    />
  ));

  return (  
    <TableRow>
      { cells }
    </TableRow>
  );
}
 
export default TableBodyRow;