import React from 'react';
import Table from 'components/Table';
import HeaderContainer from 'containers/HeaderContainer';
import CalendarContainer from '../../containers/CalendarContainer';

const Layout = () => {
  return (  
    <React.Fragment>
      <br />
      <HeaderContainer />
      <br />
      <Table />
      <CalendarContainer />
    </React.Fragment>
  );
}
 
export default Layout;