import {createBrowserRouter } from "react-router-dom";
import StudentDetails from "../pages/studentDetails";
import Auth from "../pages/auth";
import App from '../App';
 const router = createBrowserRouter(
    [ 
        {
        path: "/",
        element: <App/>,
        },
        {
         path: "/:id",
         element: <StudentDetails/>,
        }
        , {
            path: "/auth",
            element: <Auth/>,
           }
  ]
);
  export default router;