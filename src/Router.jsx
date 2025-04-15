// router.jsx
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Components/Home';
import NavbarLayout from './Components/Navbarlayout';
import Navbar from './Components/Navbar';


export const router = createBrowserRouter([
    {
      path: '/',
      element: <NavbarLayout />, // Layout containing Navbar + Outlet
      children: [
        {
          path: '/',
          element: <App />, // Todo List is main page
        },
        {
          path: '/Home',
          element: <> <Navbar/><Home/> </>,
        },
      ],
    },
  ])
