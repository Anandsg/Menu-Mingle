import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './pages/About/About';
import Error from './components/Body/Error';
import Contact from './pages/Contact/Contact';
import Body from './components/Body/Body';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import './index.css';
import RestaurantMenu from './components/Menu/RestaurantMenu';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const InstaMart = lazy(() => import('./pages/InstaMart/InstaMart'))
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
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/instamart',
                element: <Suspense fallback={<h3>Loading..</h3>}><InstaMart /></Suspense>
            },
            {
                path: 'restaurant/:resId',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
