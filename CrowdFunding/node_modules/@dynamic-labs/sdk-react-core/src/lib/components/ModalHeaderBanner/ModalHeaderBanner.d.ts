import { FC } from 'react';
type ModalHeaderBannerType = 'error' | 'success' | 'notice';
export type ModalHeaderBannerProps = {
    messageKey?: string;
    type?: ModalHeaderBannerType;
    disableTruncate?: boolean;
};
export declare const ModalHeaderBanner: FC<ModalHeaderBannerProps>;
export {};
