import React from 'react';
import Table from 'components/Table/Table';
import HeaderContainer from 'containers/HeaderContainer';

const Layout = () => {
  return (  
    <React.Fragment>
      <br />
      <HeaderContainer />
      <br />
      <Table />
    </React.Fragment>
  );
}
 
export default Layout;