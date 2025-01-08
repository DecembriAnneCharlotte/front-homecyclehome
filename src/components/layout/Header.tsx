import React from 'react';
import { Menu } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=50&h=50"
              alt="Logo"
              className="h-8 w-auto"
            />
            <h1 className="ml-3 text-xl font-semibold">
              Gestion Multi-Rôles
            </h1>
          </div>
          
          <button className="p-2 rounded-md hover:text-gray-600 hover:bg-gray-100">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};