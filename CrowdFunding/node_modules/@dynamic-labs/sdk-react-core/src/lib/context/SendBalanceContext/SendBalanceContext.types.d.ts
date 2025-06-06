export type OpenSendBalanceModalProps = {
    recipientAddress?: string;
    value?: bigint;
};
export type OpenSendBalanceModal = (props?: OpenSendBalanceModalProps) => Promise<string>;
export type SendBalanceContextProps = {
    open: OpenSendBalanceModal;
};
