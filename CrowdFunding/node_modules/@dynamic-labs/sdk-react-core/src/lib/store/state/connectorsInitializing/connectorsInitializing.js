'use client'
import { createStoreState } from '../../internalImplementation/utils/createStoreState/createStoreState.js';

const { getConnectorsInitializing: getConnectorsInitializingState, resetConnectorsInitializing, setConnectorsInitializing, useConnectorsInitializing, } = createStoreState('connectorsInitializing');
const setConnectorInitializing = (connectorKey, initializing) => {
    const currentState = getConnectorsInitializingState();
    const updatedState = Object.assign(Object.assign({}, currentState), { [connectorKey]: initializing });
    setConnectorsInitializing(updatedState);
};

export { resetConnectorsInitializing, setConnectorInitializing, useConnectorsInitializing };
