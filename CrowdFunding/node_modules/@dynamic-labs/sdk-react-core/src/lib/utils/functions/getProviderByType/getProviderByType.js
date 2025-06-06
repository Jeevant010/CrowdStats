'use client'
const getProviderByType = (providers, providerType) => providers.find((p) => p.provider === providerType);

export { getProviderByType };
