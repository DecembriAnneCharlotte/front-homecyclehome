import React, { useEffect, useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { InterventionForm } from '../../components/forms/intervention/InterventionForm';
import { InterventionList } from '../../components/interventions/InterventionList';
import { Intervention } from '../../types';
import { getInterventions } from '../../services/interventions.service';
// import { TechnicienList } from './components/TechnicienList';
// import { InterventionStats } from './components/InterventionStats';

export const AdminDashboard: React.FC = () => {
  // const [interventions, setInterventions] = useState<Intervention[]>([]);

  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
    // Ajoutez ici la logique pour traiter les données soumises
  };

  // useEffect(() => {
  //   const fetchInterventions = async () => {
  //     try {
  //       const data = await getInterventions();
  //       setInterventions(data);
  //     } catch (error) {
  //       console.error('Erreur lors de la récupération des interventions:', error);
  //     }
  //   };

  //   fetchInterventions();
  // }, []);

  const interventions: Intervention[] = [
    {
      id: 1,
      intervention_type: 'maintenance',
      intervention_statut: 'planifiée',
      intervention_date: '2023-10-01T00:00:00Z',
      intervention_duree: 60,
      zoneZoneIdZoneId: 1,
    },
    {
      id: 2,
      intervention_type: 'réparation',
      intervention_statut: 'terminée',
      intervention_date: '2023-10-02T00:00:00Z',
      intervention_duree: 90,
      zoneZoneIdZoneId: 2,
    },
    // Ajoutez d'autres interventions si nécessaire
  ];
  
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
        <InterventionList interventions={interventions}/>
        <InterventionForm onSubmit={handleSubmit} />
      </div>
          </Layout>
    </div>
  );
};