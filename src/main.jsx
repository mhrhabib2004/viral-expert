import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import OurTeam from './Components/OurTeam/OurTeam';
import ContractUs from './Components/ContractUs/ContractUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      { path:"/",
        element:<Home></Home>

      },
      {
        path:"/ourteam",
        element:<OurTeam></OurTeam>
      },
      {
        path:"/contuctus",
        element:<ContractUs></ContractUs>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
