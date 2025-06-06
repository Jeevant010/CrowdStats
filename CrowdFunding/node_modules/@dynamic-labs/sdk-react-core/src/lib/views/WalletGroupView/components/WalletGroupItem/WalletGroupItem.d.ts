import { FC, MouseEventHandler } from 'react';
import { WalletOption } from '../../../../shared';
export type WalletGroupItemProps = {
    wallet: WalletOption;
    onClick: MouseEventHandler<HTMLButtonElement>;
};
export declare const WalletGroupItem: FC<WalletGroupItemProps>;
