import { FC } from 'react';
import { ProviderEnum } from '@dynamic-labs/sdk-api-core';
import { IconThemeVariant } from '../../../../../../utils/hooks';
export type ConnectedAccountAvatarProps = {
    avatarUrl?: string;
    provider: ProviderEnum;
    iconThemeVariant?: IconThemeVariant;
};
export declare const ConnectedAccountAvatar: FC<ConnectedAccountAvatarProps>;
