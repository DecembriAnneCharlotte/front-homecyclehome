import React from 'react';
import { Users, Building2, Settings } from 'lucide-react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { DashboardStats } from './components/DashboardStats';
import { MarqueBlancheList } from './components/MarqueBlancheList';

export const SuperAdminDashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <DashboardStats />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MarqueBlancheList />
        </div>
      </div>
    </DashboardLayout>
  );
};