type UseRegisterStorageServiceProps = {
    storagePostfix?: string;
};
/**
 * Registers the storage service for the SDK.
 * When on server side rendering, the storage service is not available, so we need to register a dummy storage service.
 * @param storagePostfix - The postfix for the storage services.
 */
export declare const useRegisterStorageService: ({ storagePostfix, }: UseRegisterStorageServiceProps) => void;
export {};
