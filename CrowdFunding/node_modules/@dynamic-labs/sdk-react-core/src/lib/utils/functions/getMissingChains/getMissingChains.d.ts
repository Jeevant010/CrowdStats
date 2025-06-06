import { ChainsToConnect } from '../../../context/DynamicContext/types';
import { ConnectedWalletConnectorType } from '../../hooks/useConnectWallet/useConnectWallet';
export declare const getMissingChains: (arr1: ChainsToConnect[] | undefined, arr2: ConnectedWalletConnectorType[] | undefined) => ChainsToConnect[] | undefined;
