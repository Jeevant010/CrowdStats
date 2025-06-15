import { StoryProtocol } from "@story-protocol/core-sdk";
import { createWalletClient, custom } from "viem";
import { mainnet } from "viem/chains";

export const getStoryProtocol = () => {
  if (!window.ethereum) throw new Error("Ethereum wallet not found");

  const client = createWalletClient({
    chain: mainnet,
    transport: custom(window.ethereum),
  });

  return new StoryProtocol({ client });
};
