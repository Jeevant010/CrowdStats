import React, { useEffect, useState } from "react";
import CampaignCard from '../component/CampaignCard';

interface Campaign {
  id: string;
  title: string;
  description: string;
  target: number;
  owner: string;
}

export default function Home() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    // TODO: Fetch campaigns from Story Protocol or backend
    // For now, use dummy data
    setCampaigns([
      {
        id: "1",
        title: "Save the Rainforest",
        description: "Help us protect the rainforest from deforestation.",
        target: 10,
        owner: "0x1234...abcd",
      },
      {
        id: "2",
        title: "Clean Ocean Initiative",
        description: "Removing plastic from oceans worldwide.",
        target: 20,
        owner: "0x5678...efgh",
      },
    ]);
  }, []);

  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <h1>Active Campaigns</h1>
      {campaigns.length === 0 && <p>No campaigns found.</p>}
      {campaigns.map((c) => (
        <CampaignCard
          key={c.id}
          title={c.title}
          description={c.description}
          target={c.target}
          owner={c.owner}
        />
      ))}
    </div>
  );
}
