import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './components/About/About';
import Error from './components/Body/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />
    },
    {
        path: '/about',
        element: <About />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
