import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ClientDashboardContainer from './containers/Dashboard/Client/ClientDashboardContainer';
import AdminDashboardContainer from './containers/Dashboard/Admin/AdminDashboardContainer';
import InfluencerDashboardContainer from './containers/Dashboard/Influencer/InfluencerDashboardContainer';

function App() {
  return (
    <>

      <ClientDashboardContainer />

    </>
  );
}

export default App;
