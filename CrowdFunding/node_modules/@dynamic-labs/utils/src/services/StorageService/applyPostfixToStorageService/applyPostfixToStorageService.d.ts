import { IStorageService } from '../types';
type ApplyPostfixToStorageServiceProps<T extends IStorageService> = {
    storage: T;
    postfix: string | undefined;
};
export declare const applyPostfixToStorageService: <T extends IStorageService>({ storage, postfix, }: ApplyPostfixToStorageServiceProps<T>) => T;
export {};
