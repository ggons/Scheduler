import React from 'react';
import { Paper } from '@material-ui/core';
import Table from 'components/Table';

const TableWrap = () => {
  return (  
    <Paper style={{ minHeight: 500 }}>
      <Table />
    </Paper>
  );
}
 
export default TableWrap;