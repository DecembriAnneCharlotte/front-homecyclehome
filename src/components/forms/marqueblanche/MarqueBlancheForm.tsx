import React from 'react';
import { useForm } from 'react-hook-form';
import { MarqueBlanche } from '../../../types';
import { ColorPicker } from './ColorPicker';

interface MarqueBlancheFormData extends Omit<MarqueBlanche, 'id'> {}

interface Props {
  onSubmit: (data: MarqueBlancheFormData) => void;
  initialData?: MarqueBlanche;
}

export const MarqueBlancheForm: React.FC<Props> = ({ onSubmit, initialData }) => {
  const { register, handleSubmit, watch } = useForm<MarqueBlancheFormData>({
    defaultValues: initialData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Marque</label>
        <input
          type="text"
          {...register('marque')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          {...register('email')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Sous-domaine</label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
            https://
          </span>
          <input
            type="text"
            {...register('sousDomaine')}
            className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          />
          <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
            .domain.com
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ColorPicker label="Couleur principale" {...register('couleur1')} />
        <ColorPicker label="Couleur secondaire" {...register('couleur2')} />
        <ColorPicker label="Couleur d'accent" {...register('couleur3')} />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Enregistrer la marque blanche
      </button>
    </form>
  );
};