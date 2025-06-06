import { FC, PropsWithChildren } from 'react';
import { ClassStyleProps } from '../../utils/types';
type DividerProps = ClassStyleProps & {
    fullWidth?: boolean;
    text?: string;
} & PropsWithChildren;
export declare const Divider: FC<DividerProps>;
export {};
