import React from 'react';
import { Table } from '@material-ui/core';
import TableHead from 'components/TableHead';
import TableBodyContainer from 'containers/TableBodyContainer';

export default () => {
  return (  
    <Table>
      <TableHead />
      <TableBodyContainer />
    </Table>
  );
}