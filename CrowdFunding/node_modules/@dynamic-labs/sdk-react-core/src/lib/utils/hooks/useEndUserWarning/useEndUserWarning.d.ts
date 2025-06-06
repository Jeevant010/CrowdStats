import { ProjectSettings } from '@dynamic-labs/sdk-api-core';
export declare const resetEndUserWarning: () => void;
export declare const useEndUserWarning: ({ suppress, projectSettings, }: {
    suppress?: boolean;
    projectSettings?: ProjectSettings;
}) => void;
