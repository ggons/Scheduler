import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Layout from './components/Layout';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <div>
        <ToastContainer />
        <Layout />
      </div>
    );
  }
}

export default App;