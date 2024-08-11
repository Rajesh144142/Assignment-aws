import {createBrowserRouter } from "react-router-dom";
import StudentDetails from "../pages/studentDetails";
import Auth from "../pages/auth";
import App from '../App';
import '@coreui/coreui/dist/css/coreui.min.css';
 const router = createBrowserRouter(
    [ 
        {
        path: "/",
        element: <App/>,
        },
        {
         path: "/students/:id",
         element: <StudentDetails/>,
        }
        , {
            path: "/auth",
            element: <Auth/>,
           }
  ]
);
  export default router;