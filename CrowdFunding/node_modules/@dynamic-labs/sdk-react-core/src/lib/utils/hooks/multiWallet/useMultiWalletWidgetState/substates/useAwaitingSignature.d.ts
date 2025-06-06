import { AwaitingSignatureState, MultiWalletWidgetState } from '../../../../../shared/types';
export declare const useAwaitingSignature: () => readonly [AwaitingSignatureState, (newAwaitingSignatureState: AwaitingSignatureState, widgetState: MultiWalletWidgetState) => void, () => void];
