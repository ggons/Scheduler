import React from 'react';
import { TableBody, TableRow, TableCell } from '@material-ui/core';
import TableBodyRow from 'components/TableBodyRow';

function renderWeeks(dateArr) {
  const { length } = dateArr;
  const weeks = [];
  for (let i = 0; i < length / 7; i++)
    weeks.push(dateArr.splice(0, 7));

  return weeks.map((week, i) => (
    <TableBodyRow week={week} key={i} />
  ));
}

export default ({ dateArr }) => {
  return (  
    <TableBody>
      { renderWeeks(dateArr) }
    </TableBody>
  );
}