import React from 'react';
import { Layout } from '../../components/layout/Layout';
// import { MesInterventions } from './components/MesInterventions';
// import { PriseRendezVous } from './components/PriseRendezVous';

export const ClientDashboard: React.FC = () => {
  return (
    <div
    className="min-h-screen bg-cover bg-center bg-gray-600 text-white overflow-hidden"
    style={{
      backgroundImage: "url(../../assets/img/home.svg)",
      height: "100vh",
    }}

    >

    <Layout>
      <div className="space-y-6">
      Dashboard client
        {/* <MesInterventions />
        <PriseRendezVous /> */}
      </div>
    </Layout>
  </div> 
  );
};