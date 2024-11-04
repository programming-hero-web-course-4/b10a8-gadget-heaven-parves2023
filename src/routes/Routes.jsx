import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import NotFound from '../components/NotFound';
import Dashboard from '../pages/Dashboard';
import Statistics from '../pages/Statistics';
import FAQPage from '../pages/FAQPage';
import Contact from '../pages/Contact';

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
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/FAQ",
        element: <FAQPage />,
      },


    ],
  },
  {
    
      path: "*",
      element: <NotFound />,
    
  }
]);

export { routes };
