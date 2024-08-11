import {createBrowserRouter } from "react-router-dom";
import StudentDetails from "../pages/studentDetails";
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
        
  ]
);
  export default router;