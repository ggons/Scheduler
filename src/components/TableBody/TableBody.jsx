import React from 'react';
import { TableBody, TableRow, TableCell } from '@material-ui/core';
import TableBodyRow from 'components/TableBodyRow';

function renderWeeks(dateArr, rest) {
  const { length } = dateArr;
  const weeks = [];
  for (let i = 0; i < length / 7; i++)
    weeks.push(dateArr.splice(0, 7));

  return weeks.map((week, i) => (
    <TableBodyRow week={week} key={i} { ...rest } />
  ));
}

export default ({ dateArr, ...rest }) => {
  return (  
    <TableBody>
      { renderWeeks(dateArr, rest) }
    </TableBody>
  );
}