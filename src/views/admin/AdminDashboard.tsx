import React from 'react';
import { Layout } from '../../components/layout/Layout';
// import { TechnicienList } from './components/TechnicienList';
// import { InterventionStats } from './components/InterventionStats';

export const AdminDashboard: React.FC = () => {
  return (
    <div
    className="min-h-screen bg-cover bg-center bg-gray-600 text-white overflow-hidden"
    style={{
      backgroundImage: "url(../../assets/img/dashboardbg.svg)",
      height: "100vh",
    }}

    >
          <Layout>
      
      <div className="space-y-6">
        Dashboard admin
        {/* <InterventionStats />
        <TechnicienList /> */}
      </div>
          </Layout>
    </div>
  );
};