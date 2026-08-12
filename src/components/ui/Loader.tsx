// components/common/Loader.tsx
import React from 'react';

interface LoaderProps {
  label?: string;
}

export default function Loader({ label = 'Loading...' }: LoaderProps) {
  return (
    <div className="min-h-[60vh] w-full flex flex-col items-center justify-center gap-4 p-6">
      <div className="relative flex items-center justify-center">
        {/* Outer pulsing ring */}
        <div className="w-12 h-12 rounded-full border-4 border-pink-100 animate-ping absolute" />
        
        {/* Inner spinning gradient border */}
        <div className="w-12 h-12 rounded-full border-4 border-pink-200 border-t-[#C01C5C] animate-spin" />
      </div>

      {label && (
        <p className="font-heading text-sm font-medium text-slate-500 animate-pulse">
          {label}
        </p>
      )}
    </div>
  );
}