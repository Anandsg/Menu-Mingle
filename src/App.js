import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Body from './components/Body';

const App = () => {
  return (
    <React.StrictMode>
      <Header />
      <Body />
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
reportWebVitals();

export default App;