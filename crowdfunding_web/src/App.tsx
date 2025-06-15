import React from "react";
import WalletConnect from './component/WalletConnect';
import Home from "./pages/Home";
import CreateCampaign from './pages/CampaignDetails';

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <header style={{ marginBottom: 20 }}>
        <WalletConnect />
      </header>
      <main>
        <CreateCampaign />
        <hr style={{ margin: "20px 0" }} />
        <Home />
      </main>
    </div>
  );
}
