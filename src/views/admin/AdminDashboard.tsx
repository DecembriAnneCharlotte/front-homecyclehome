import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { InterventionForm } from '../../components/forms/intervention/InterventionForm';
// import { TechnicienList } from './components/TechnicienList';
// import { InterventionStats } from './components/InterventionStats';

export const AdminDashboard: React.FC = () => {
  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
    // Ajoutez ici la logique pour traiter les données soumises
  };
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
        <InterventionForm onSubmit={handleSubmit} />
      </div>
          </Layout>
    </div>
  );
};