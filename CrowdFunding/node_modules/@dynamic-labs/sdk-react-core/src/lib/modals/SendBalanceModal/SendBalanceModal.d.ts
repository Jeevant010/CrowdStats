import { FC } from 'react';
type SendBalanceModalProps = {
    initialRecipientAddress?: string;
    initialValue?: bigint;
    onReject: (error: unknown) => void;
    onSuccess: (transaction: string) => void;
};
export declare const SendBalanceModal: FC<SendBalanceModalProps>;
export {};
