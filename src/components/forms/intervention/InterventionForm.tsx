import React from 'react';
// import { Clock, MapPin, FileText, Tag } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Intervention } from '../../../types';

interface InterventionFormData extends Omit<Intervention, 'id'> {}

interface Props {
  onSubmit: (data: InterventionFormData) => void;
  initialData?: Intervention;
}

export const InterventionForm: React.FC<Props> = ({ onSubmit, initialData }) => {
  const { register, handleSubmit } = useForm<InterventionFormData>({
    defaultValues: initialData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Type</label>
          <select
            {...register('type')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="maintenance">Maintenance</option>
            <option value="réparation">Réparation</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Prix</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              step="0.01"
              {...register('prix')}
              className="block w-full rounded-md border-gray-300 pl-7 focus:border-indigo-500 focus:ring-indigo-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">€</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          {...register('description')}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Enregistrer l'intervention
      </button>
    </form>
  );
};