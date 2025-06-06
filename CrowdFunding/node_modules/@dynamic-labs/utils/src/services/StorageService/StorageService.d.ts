import EventEmitter from 'eventemitter3';
import { IStorageService } from './types';
export type StorageSource = 'secureStorage' | 'localStorage' | 'sessionStorage';
export type StorageOptions = {
    /**
     * An ordered array of storage sources by priority.
     * The service will use the first available storage source in this order.
     *
     * Example:
     * StorageService.setItem('key', 'value', { priority: ['secureStorage', 'sessionStorage', 'localStorage'] });
     * The line above will first try to store the value in secure storage,
     * if the secure storage is not available, it try to store in session storage,
     * and finally if both secure and session storage are not available, it will store in local storage.
     */
    priority: StorageSource[];
};
export declare class StorageService {
    static registry: Record<StorageSource, IStorageService | undefined>;
    static clearRegistry(): void;
    static registerSourceStorage(source: StorageSource, implementation: IStorageService): void;
    static getSourceStorage(source: StorageSource): IStorageService | undefined;
    static resolveStorage(options?: StorageOptions): IStorageService;
    static getItem<T = string>(key: string, options?: StorageOptions): T | null;
    static setItem<T>(key: string, value: T, options?: StorageOptions): void;
    static removeItem(key: string, options?: StorageOptions): void;
    static getKeys(options?: StorageOptions): string[];
    static events: EventEmitter<{
        parseFailure: (error: unknown, key: string) => void;
    }, any>;
}
