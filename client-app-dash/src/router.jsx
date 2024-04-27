import {createBrowserRouter} from "react-router-dom";
import AdminDashboardContainer from './containers/Dashboard/Admin/AdminDashboardContainer'



const router = createBrowserRouter([

    {
        path:'/',
        element:<AdminDashboardContainer />
    }
   
  


])
export default router ;