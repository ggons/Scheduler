import React from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';

const style = {
  tableCell: {
    textAlign: 'center',
    padding: 5,
    width: '10%'
  }
}

export default () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell style={style.tableCell}>일</TableCell>
        <TableCell style={style.tableCell}>월</TableCell>
        <TableCell style={style.tableCell}>화</TableCell>
        <TableCell style={style.tableCell}>수</TableCell>
        <TableCell style={style.tableCell}>목</TableCell>
        <TableCell style={style.tableCell}>금</TableCell>
        <TableCell style={style.tableCell}>토</TableCell>
      </TableRow>
    </TableHead>
  )
}