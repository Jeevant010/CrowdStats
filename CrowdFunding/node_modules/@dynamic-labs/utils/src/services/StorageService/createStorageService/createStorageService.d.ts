import { IStorageService } from '../types';
type CreateStorageServiceProps = {
    storage: Storage;
};
export declare const createStorageService: ({ storage, }: CreateStorageServiceProps) => IStorageService;
export {};
