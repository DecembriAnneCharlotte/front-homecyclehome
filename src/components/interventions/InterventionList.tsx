import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Intervention } from '../../types';
import { StatusBadge } from '../shared/StatusBadge';

interface Props {
  interventions: Intervention[];
}

export const InterventionList: React.FC<Props> = ({ interventions }) => {
  return (
    <div className="space-y-4">
      {interventions.map((intervention) => (
        <div key={intervention.id} className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold">
              {intervention.type === 'maintenance' ? 'Maintenance' : 'Réparation'}
            </h3>
            <StatusBadge status={intervention.statut} />
          </div>
          
          <div className="mt-4 space-y-2">
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(intervention.date).toLocaleDateString('fr-FR')}
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-4 w-4 mr-2" />
              {intervention.duree} minutes
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              Zone {intervention.zoneId}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};