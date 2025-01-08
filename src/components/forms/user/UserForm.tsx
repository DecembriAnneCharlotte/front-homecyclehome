import React from 'react';
import { useForm } from 'react-hook-form';
import { User, Role } from '../../../types';

interface UserFormData extends Omit<User, 'id'> {}

interface Props {
  onSubmit: (data: UserFormData) => void;
  initialData?: User;
  roles?: Role[];
}

export const UserForm: React.FC<Props> = ({ onSubmit, initialData, roles = ['client'] }) => {
  const { register, handleSubmit } = useForm<UserFormData>({
    defaultValues: initialData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            {...register('nom')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Prénom</label>
          <input
            type="text"
            {...register('prenom')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          {...register('email')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      {roles.length > 1 && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Rôle</label>
          <select
            {...register('role')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {roles.map((role) => (
              <option key={role} value={role}>
                {role === 'super_admin' ? 'Super Admin' :
                 role === 'admin' ? 'Administrateur' :
                 role === 'technicien' ? 'Technicien' : 'Client'}
              </option>
            ))}
          </select>
        </div>
      )}

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Enregistrer
      </button>
    </form>
  );
};