import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Layout } from '../layout/Layout';

interface Props {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<Props> = ({ children }) => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <Layout>
      <div className="bg-white rounded-lg shadow">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg font-medium text-gray-900">
            Tableau de bord - {user?.role === 'super_admin' ? 'Super Admin' :
                             user?.role === 'admin' ? 'Administrateur' :
                             user?.role === 'technicien' ? 'Technicien' : 'Client'}
          </h2>
        </div>
        <div className="border-t border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
};