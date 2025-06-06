export type ClassNamesObjectArg = {
    [key: string]: undefined | boolean;
};
export type ClassNamesArg = false | undefined | string | ClassNamesObjectArg;
export type ClassNames = (...args: ClassNamesArg[]) => string;
