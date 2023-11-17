import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const App = () => {
  return (
    <Provider store={appStore}>
      <React.StrictMode>
        <Header />
        <Outlet />
      </React.StrictMode>
    </Provider>
  )
}

export default App;
