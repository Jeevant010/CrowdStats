import { FC, PropsWithChildren, ReactNode } from 'react';
export interface ChipProps {
    className?: string;
    leading?: ReactNode;
    trailing?: ReactNode;
}
/** An outlined chip component that displays a label and optional leading and trailing icons. */
export declare const Chip: FC<PropsWithChildren<ChipProps>>;
