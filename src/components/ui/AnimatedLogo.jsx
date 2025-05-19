import React from "react";
import profileImage from "../../public/profile.jpg"; // Adjust the path accordingly

export default function AnimatedLogo() {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center text-white">
      <svg
        className="animate-spin-slow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      >
        <circle cx="50" cy="50" r="60" className="opacity-30" />
        <path
          d="M 50,2 A 48,48 0 0,1 98,50 A 48,48 0 0,1 50,98 A 48,48 0 0,1 2,50 A 48,48 0 0,1 50,2"
          className="stroke-current animate-dash"
        />
      </svg>

      {/* Larger Profile Image */}
      <img
        src={profileImage}
        alt="Profile"
        className="absolute w-24 h-24 rounded-full object-cover"
      />

      <style>{`
        .animate-spin-slow {
          animation: spin 5s linear infinite;
        }
        .animate-dash {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: dash 2s ease-in-out infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes dash {
          0% { stroke-dashoffset: 300; }
          50% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 300; }
        }
      `}</style>
    </div>
  );
}
