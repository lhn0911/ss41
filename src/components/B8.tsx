import React from 'react';

export default function B8() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-4">
        <div className="bg-blue-500 text-white px-4 py-2 rounded">01</div>
        <div className="bg-blue-500 text-white px-4 py-2 rounded">02</div>
        <div className="bg-blue-500 text-white px-4 py-2 rounded">03</div>
      </div>

      <div className="flex gap-4 justify-end">
        <div className="bg-blue-500 text-white px-4 py-2 rounded">01</div>
        <div className="bg-blue-500 text-white px-4 py-2 rounded">02</div>
        <div className="bg-blue-500 text-white px-4 py-2 rounded">03</div>
      </div>

      <div className="flex gap-4 justify-center">
        <div className="bg-blue-500 text-white px-4 py-2 rounded">01</div>
        <div className="bg-blue-500 text-white px-4 py-2 rounded">02</div>
        <div className="bg-blue-500 text-white px-4 py-2 rounded">03</div>
      </div>

      <div className="flex gap-4 justify-between">
        <div className="bg-blue-500 text-white px-4 py-2 rounded">01</div>
        <div className="bg-blue-500 text-white px-4 py-2 rounded">02</div>
        <div className="bg-blue-500 text-white px-4 py-2 rounded">03</div>
      </div>

      <div className="flex gap-4 justify-evenly">
        <div className="bg-blue-500 text-white px-4 py-2 rounded">01</div>
        <div className="bg-blue-500 text-white px-4 py-2 rounded">02</div>
        <div className="bg-blue-500 text-white px-4 py-2 rounded">03</div>
      </div>
    </div>
  );
}