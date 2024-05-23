import React from 'react';

export default function B7() {
  return (
    <div className="flex">
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 9 }, (_, i) => (
          <button
            key={i}
            style={{ backgroundColor: 'rgb(255, 255, 255)' }}
            className="text-black text-xl font-bold py-4 px-6 rounded-lg shadow-md hover:bg-gray-200"
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}