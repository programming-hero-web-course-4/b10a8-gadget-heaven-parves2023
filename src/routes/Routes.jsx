import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import NotFound from '../components/NotFound';
import Dashboard from '../pages/Dashboard';
import Statistics from '../pages/Statistics';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/category/:category',
        element: <Home />, 
      },
      {
        path: '/product-details/:productId',
        element: <ProductDetails />,
      },
      
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },


    ],
  },
  {
    
      path: "*",
      element: <NotFound />,
    
  }
]);

export { routes };
