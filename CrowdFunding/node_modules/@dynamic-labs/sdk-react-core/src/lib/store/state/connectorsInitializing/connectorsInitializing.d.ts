declare const resetConnectorsInitializing: () => void, useConnectorsInitializing: () => Record<string, boolean>;
declare const setConnectorInitializing: (connectorKey: string, initializing: boolean) => void;
declare const areAllConnectorsInitialized: () => boolean;
declare const getConnectorsInitializing: () => string[];
export { getConnectorsInitializing, resetConnectorsInitializing, setConnectorInitializing, useConnectorsInitializing, areAllConnectorsInitialized, };
