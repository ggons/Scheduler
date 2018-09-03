import React from 'react';
import { Paper, Table } from '@material-ui/core';
import TableHead from 'components/TableHead';

export default () => {
  return (  
    <Paper style={{ minHeight: 500 }}>
      <Table>
        <TableHead />
      </Table>
    </Paper>
  );
}