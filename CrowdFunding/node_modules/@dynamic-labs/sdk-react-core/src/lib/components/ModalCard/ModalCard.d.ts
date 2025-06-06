import { FC, PropsWithChildren } from 'react';
type ModalCardProps = {
    borderRadius?: 'default' | 'small';
    border?: boolean;
    /** Whether to display sharp border radius on last child in mobile */
    sharpBottomRadiusOnMobile?: boolean;
    dataTestId?: string;
};
export declare const ModalCard: FC<PropsWithChildren<ModalCardProps>>;
export {};
