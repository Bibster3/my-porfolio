import React from 'react';

export default function BentoBox({ title, children }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg fade-in">
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      {children}
    </div>
  );
}