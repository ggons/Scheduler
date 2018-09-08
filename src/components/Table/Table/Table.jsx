import React from 'react';
import { Paper, Table } from '@material-ui/core';
import TableHead from 'components/Table/TableHead';
import TableBodyContainer from 'containers/Table/TableBodyContainer';

export default () => {
  return (  
    <Paper>
      <Table>
        <TableHead />
        <TableBodyContainer />
      </Table>
    </Paper>
  );
}