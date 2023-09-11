import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <React.StrictMode>
      <Header />
      <Outlet />
    </React.StrictMode>
  )
}

export default App;
