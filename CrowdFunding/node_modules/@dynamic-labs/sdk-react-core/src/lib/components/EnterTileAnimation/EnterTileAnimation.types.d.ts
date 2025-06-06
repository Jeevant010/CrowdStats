import { FC, PropsWithChildren } from 'react';
export type EnterTileAnimationProps = {
    className?: string;
    dataTestId?: string;
    delay?: string;
};
export type EnterTileAnimationComponent = FC<PropsWithChildren<EnterTileAnimationProps>>;
