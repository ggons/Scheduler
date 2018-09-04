import React from 'react';
import TableBodyCell from 'components/TableBodyCell';
import { TableRow } from '@material-ui/core';

function renderWeek(week) {
  return week.map(day => <TableBodyCell day={day} key={day.month + day.date} />);
}

const TableBodyRow = ({ week }) => {
  return (  
    <TableRow>
      { renderWeek(week) }
    </TableRow>
  );
}
 
export default TableBodyRow;