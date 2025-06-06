/// <reference types="react" />
import { CopyKey } from '../../../../../shared';
type Props = {
    numberOfWallets: number;
    onClick: VoidFunction;
    text: string;
    disabled?: boolean;
} & CopyKey;
export declare const ListItemButton: ({ text, onClick, numberOfWallets, disabled, copykey, }: Props) => JSX.Element;
export {};
