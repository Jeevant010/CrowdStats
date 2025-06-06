/**
 * Switch wallet
 *
 * @returns Function to switch wallet
 *
 * @example
 * ```tsx
 * const App = () => {
 *   const userWallets = useUserWallets();
 *   const switchWallet = useSwitchWallet();
 *
 *   return (
 *     <div>
 *       {userWallets.map((wallet) => (
 *         <button
 *           key={wallet.address}
 *           onClick={() => switchWallet(wallet.id)}
 *         >
 *           {wallet.address}
 *         </button>
 *       ))}
 *    </div>
 *  );
 * }
 */
export declare const useSwitchWallet: () => (walletId: string) => Promise<void>;
