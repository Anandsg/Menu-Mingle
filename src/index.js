import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './components/About/About';
import Error from './components/Body/Error';
import Contact from './components/Contact/Contact';
import Body from './components/Body/Body';
import Cart from './components/Cart/Cart';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
