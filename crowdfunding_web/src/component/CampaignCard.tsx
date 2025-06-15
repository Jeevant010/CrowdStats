import React from "react";

interface CampaignCardProps {
  title: string;
  description: string;
  target: number;
  owner: string;
}

export default function CampaignCard({ title, description, target, owner }: CampaignCardProps) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8, marginBottom: 12 }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Target: {target} ETH</p>
      <p>Owner: {owner.slice(0, 6)}...{owner.slice(-4)}</p>
    </div>
  );
}
