import { useState } from "react";
import { ethers } from "ethers";
import "./WalletConnect.css"; // Create this CSS file
import {  useEffect } from "react";

// Minimal styled components for demonstration
const ConnectButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className="connect-button" {...props}>{props.children}</button>
);

const ConnectedIndicator = () => (
  <span className="connected-indicator" style={{ color: "green", marginRight: 8 }}>●</span>
);

const UserDisplay = (props: React.HTMLAttributes<HTMLSpanElement> & { title?: string }) => (
  <span className="user-display" title={props.title}>{props.children}</span>
);

export default function WalletConnect() {
  const [account, setAccount] = useState<string | null>(null);
  const [ensName, setEnsName] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (account) {
      lookupENSName(account);
    }
  }, [account]);

  const lookupENSName = async (address: string) => {
    try {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      const name = await provider.lookupAddress(address);
      if (name) {
        setEnsName(name);
      }
    } catch (error) {
      console.error("ENS lookup failed:", error);
    }
  };

  const connectWallet = async () => {
    if ((window as any).ethereum) {
      try {
        setLoading(true);
        const provider = new ethers.providers.Web3Provider((window as any).ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
      } catch (error) {
        console.error("Wallet connection failed:", error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  const getUserDisplayName = () => {
    if (ensName) return ensName;
    if (account) return `${account.slice(0, 6)}...${account.slice(-4)}`;
    return "";
  };

  return (
    <ConnectButton onClick={connectWallet} disabled={loading}>
      {loading ? (
        "Connecting..."
      ) : account ? (
        <>
          <ConnectedIndicator />
          <UserDisplay title={account}>{getUserDisplayName()}</UserDisplay>
        </>
      ) : (
        "Connect Wallet"
      )}
    </ConnectButton>
  );
}