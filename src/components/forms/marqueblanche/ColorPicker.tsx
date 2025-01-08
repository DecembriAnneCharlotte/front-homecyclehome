import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const ColorPicker: React.FC<Props> = ({ label, ...props }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="color"
          {...props}
          className="h-10 w-full rounded-md border-gray-300 cursor-pointer"
        />
      </div>
    </div>
  );
};