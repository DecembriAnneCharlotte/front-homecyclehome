// ForfaitsComponent.tsx
import React, { useEffect, useState } from 'react';
import { getForfaits } from '../../services/forfaits.service';

const ForfaitsComponent: React.FC = () => {
  const [forfaits, setForfaits] = useState<string>('');

  useEffect(() => {
    const fetchForfaits = async () => {
      const data = await getForfaits();
      setForfaits(data);
    };

    fetchForfaits();
  }, []);

  return (
    <div>
      <h1>Forfaits</h1>
      <p>{forfaits}</p>
    </div>
  );
};

export default ForfaitsComponent;
