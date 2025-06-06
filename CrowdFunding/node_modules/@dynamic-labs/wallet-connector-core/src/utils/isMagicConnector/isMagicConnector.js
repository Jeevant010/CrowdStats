'use client'
const isMagicConnector = (connector) => ['magicemailotp', 'magicsocial'].includes(connector.key);

export { isMagicConnector };
