'use client'
const isBloctoConnector = (connector) => ['bloctoemail', 'bloctoevm', 'Blocto'].includes(connector.key);

export { isBloctoConnector };
