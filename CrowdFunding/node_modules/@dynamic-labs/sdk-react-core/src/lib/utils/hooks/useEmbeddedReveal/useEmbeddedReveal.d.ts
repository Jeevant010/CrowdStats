import { Wallet } from '../../../shared';
export declare const useEmbeddedReveal: () => {
    readonly initExportProcess: (recoveryPhrase?: boolean, isPromptForExport?: boolean) => Promise<Wallet>;
};
