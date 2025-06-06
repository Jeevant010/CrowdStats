import { FC } from 'react';
import { IEmailWalletConnector } from '@dynamic-labs/wallet-connector-core';
export type EmailConnectorPendingSignModalContentProps = {
    emailWalletConnector: IEmailWalletConnector;
};
export type EmailConnectorPendingSignModalContentComponent = FC<EmailConnectorPendingSignModalContentProps>;
