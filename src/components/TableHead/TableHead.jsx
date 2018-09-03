import React from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';

export default () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>일</TableCell>
        <TableCell>월</TableCell>
        <TableCell>화</TableCell>
        <TableCell>수</TableCell>
        <TableCell>목</TableCell>
        <TableCell>금</TableCell>
        <TableCell>토</TableCell>
      </TableRow>
    </TableHead>
  )
}