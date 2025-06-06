import { Chain } from '@dynamic-labs/wallet-connector-core';
import { StepProps } from '../../../../components/Step/Step';
export declare const getChainStepState: (chain: Chain, chainsLeftToConnect: Chain[]) => StepProps['state'];
