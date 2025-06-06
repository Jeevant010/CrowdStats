type Types = Record<string, any>;
type Message = Record<string, any>;
export type SignTypedData = {
    types: Types;
    message: Message;
    primaryType: string;
};
export type RawMessage = {
    raw: string;
};
export {};
