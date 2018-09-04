import React from 'react';
import TableBodyCell from 'components/TableBodyCell';
import { TableRow } from '@material-ui/core';

function renderWeek(week, rest) {
  return week.map(day => <TableBodyCell day={day} key={day.month + day.date} { ...rest } />);
}

const TableBodyRow = ({ week, ...rest }) => {
  return (  
    <TableRow>
      { renderWeek(week, rest) }
    </TableRow>
  );
}
 
export default TableBodyRow;