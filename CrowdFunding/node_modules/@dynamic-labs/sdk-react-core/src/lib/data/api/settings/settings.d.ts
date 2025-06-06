import { ProjectSettings } from '@dynamic-labs/sdk-api-core';
export declare const fetchProjectSettings: (environmentId: string) => Promise<ProjectSettings | undefined>;
export declare const sendDynamicProps: (environmentId: string, settingsToSend: {
    dynamicContextProps?: object;
    dynamicWagmiSettings?: object;
    frameworkSettings?: object;
}) => Promise<void>;
