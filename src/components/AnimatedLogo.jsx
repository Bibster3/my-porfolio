import React from 'react';

export default function AnimatedLogo() {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center text-white">
      <svg
        className="animate-spin-slow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
      >
        <circle cx="50" cy="50" r="50" className="opacity-30" />
        <path
          d="M 50,10 A 40,40 0 0,1 90,50 A 40,40 0 0,1 50,90 A 40,40 0 0,1 10,50 A 40,40 0 0,1 50,10"
          className="stroke-current animate-dash"
        />
      </svg>
      <style>{`
        .animate-spin-slow {
          animation: spin 5s linear infinite;
        }
        .animate-dash {
          stroke-dasharray: 157;
          stroke-dashoffset: 157;
          animation: dash 2s ease-in-out infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes dash {
          0% { stroke-dashoffset: 157; }
          50% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 157; }
        }
      `}</style>
    </div>
  );
}