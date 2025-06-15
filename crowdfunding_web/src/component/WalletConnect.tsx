import { useState } from "react";
import { ethers } from "ethers";

export default function WalletConnect() {
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    if ((window as any).ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider((window as any).ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <button onClick={connectWallet} style={{ padding: "8px 16px", cursor: "pointer" }}>
      {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
    </button>
  );
}
