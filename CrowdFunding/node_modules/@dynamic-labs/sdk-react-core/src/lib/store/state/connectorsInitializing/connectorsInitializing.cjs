'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createStoreState = require('../../internalImplementation/utils/createStoreState/createStoreState.cjs');

const { getConnectorsInitializing: getConnectorsInitializingState, resetConnectorsInitializing, setConnectorsInitializing, useConnectorsInitializing, } = createStoreState.createStoreState('connectorsInitializing');
const setConnectorInitializing = (connectorKey, initializing) => {
    const currentState = getConnectorsInitializingState();
    const updatedState = Object.assign(Object.assign({}, currentState), { [connectorKey]: initializing });
    setConnectorsInitializing(updatedState);
};

exports.resetConnectorsInitializing = resetConnectorsInitializing;
exports.setConnectorInitializing = setConnectorInitializing;
exports.useConnectorsInitializing = useConnectorsInitializing;
