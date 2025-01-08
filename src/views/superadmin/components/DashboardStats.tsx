import React from 'react';
import { Users, Building2, Calendar } from 'lucide-react';

export const DashboardStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard
        icon={<Building2 className="h-6 w-6" />}
        title="Marques Blanches"
        value="12"
        trend="+2 ce mois"
      />
      <StatCard
        icon={<Users className="h-6 w-6" />}
        title="Utilisateurs"
        value="1,234"
        trend="+15% vs dernier mois"
      />
      <StatCard
        icon={<Calendar className="h-6 w-6" />}
        title="Interventions"
        value="456"
        trend="89% complétées"
      />
    </div>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  trend: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, trend }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center">
      <div className="p-2 bg-indigo-100 rounded-lg">{icon}</div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="text-2xl font-bold text-indigo-600">{value}</p>
        <p className="text-sm text-gray-500">{trend}</p>
      </div>
    </div>
  </div>
);