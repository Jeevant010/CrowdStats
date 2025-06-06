'use client'
const shouldManuallyReconnectOnRefresh = (connector) => connector.connectedChain === 'STARK' || connector.connectedChain === 'FLOW';

export { shouldManuallyReconnectOnRefresh };
