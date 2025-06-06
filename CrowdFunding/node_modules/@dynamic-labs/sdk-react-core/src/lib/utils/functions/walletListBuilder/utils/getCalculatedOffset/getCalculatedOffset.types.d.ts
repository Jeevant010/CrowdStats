export type GetCalculatedOffsetProps = {
    defaultOffset: number;
    hasWalletFilter: boolean;
    list: string[];
    priorityList: string[];
};
export type GetCalculatedOffsetUtil = (props: GetCalculatedOffsetProps) => number;
