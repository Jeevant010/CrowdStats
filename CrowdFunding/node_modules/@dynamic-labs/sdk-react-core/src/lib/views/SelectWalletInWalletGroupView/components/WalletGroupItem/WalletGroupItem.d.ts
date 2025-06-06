import { FC, MouseEventHandler } from 'react';
import { WalletOption } from '../../../../shared';
type WalletGroupItemProps = {
    groupKey: string;
    wallet: WalletOption;
    onClick: MouseEventHandler<HTMLButtonElement>;
};
export declare const WalletGroupItem: FC<WalletGroupItemProps>;
export {};
