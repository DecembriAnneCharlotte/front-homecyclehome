import React from 'react';
import { Layout } from '../../components/layout/Layout';
// import { PlanningJour } from './components/PlanningJour';
// import { InterventionsPrevues } from './components/InterventionsPrevues';

export const TechnicienDashboard: React.FC = () => {
  return (
    <div
    className="min-h-screen bg-cover bg-center bg-gray-600 text-white overflow-hidden"
    style={{
      backgroundImage: "url(../../assets/img/home.svg)",
      height: "100vh",
    }}

    >

    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      Dashboard technicien
        {/* <PlanningJour />
        <InterventionsPrevues /> */}
      </div>
    </Layout>
    </div>
  );
};