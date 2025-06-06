import { FC } from 'react';
import { ProjectSettings } from '@dynamic-labs/sdk-api-core';
import { CopyKey, ModalProps } from '../../../shared';
export type WalletHeaderProps = Partial<ModalProps> & CopyKey & {
    heading: string | JSX.Element;
    description?: string | JSX.Element;
    descriptionCopykey?: string;
    projectSettings?: ProjectSettings;
};
export declare const Header: FC<WalletHeaderProps>;
