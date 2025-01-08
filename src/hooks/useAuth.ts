import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Role } from '../types';

export const useAuth = () => {
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);

  const hasRole = (role: Role) => user?.role === role;

  return {
    user,
    isAuthenticated,
    hasRole,
    isSuperAdmin: hasRole('super_admin'),
    isAdmin: hasRole('admin'),
    isTechnicien: hasRole('technicien'),
    isClient: hasRole('client'),
  };
};