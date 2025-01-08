import React from 'react';

type Status = 'planifiée' | 'en cours' | 'terminée' | 'annulée';

interface Props {
  status: Status;
}

export const StatusBadge: React.FC<Props> = ({ status }) => {
  const colors = {
    planifiée: 'bg-blue-100 text-blue-800',
    'en cours': 'bg-yellow-100 text-yellow-800',
    terminée: 'bg-green-100 text-green-800',
    annulée: 'bg-red-100 text-red-800',
  };

  return (
    <span className={`px-2 py-1 rounded-full text-sm ${colors[status]}`}>
      {status}
    </span>
  );
};