import {createBrowserRouter} from "react-router-dom";
import AdminDashboardContainer from './containers/Dashboard/Admin/AdminDashboardContainer'
import ClientDashboardContainer from './containers/Dashboard/Client/ClientDashboardContainer'
import InfluencerDashboardContainer from './containers/Dashboard/Influencer/InfluencerDashboardContainer'


const router = createBrowserRouter([

    {
        path:'/DashAdmin',
        element:<AdminDashboardContainer />
    },
    {
        path:'/',
        element: <ClientDashboardContainer />,
       
    },
 
    {
        path:'/DashInfluencer',   
        element: <InfluencerDashboardContainer />
    },
  


])
export default router ;