import React from "react";

export default function CampaignCard({ title, description, target, owner, collected, image, onDonate }) {
  const progress = Math.min((collected / target) * 100, 100);

  return (
    <div className="rounded-lg shadow-lg bg-white p-6 mb-6">
      <img src={image} alt={title} className="rounded w-full h-48 object-cover mb-4" />
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="mb-2">{description}</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-sm mb-2">Raised: {collected} / {target} ETH</p>
      <button onClick={onDonate} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Donate</button>
    </div>
  );
}
