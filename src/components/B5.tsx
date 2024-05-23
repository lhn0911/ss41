// src/components/B5.js
import React from 'react';

export default function B5() {
  return (
    <div className="flex">
      <div className="relative bg-blue-200 p-8 rounded-lg">
        <p className="text-blue-800">Relative parent</p>
        <div className="absolute bottom-0 left-0 transform translate-x-2 translate-y-2 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg">
          Absolute child
        </div>
      </div>
    </div>
  );
}
