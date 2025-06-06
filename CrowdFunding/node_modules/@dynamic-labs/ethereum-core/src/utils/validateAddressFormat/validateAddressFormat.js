'use client'
const validateAddressFormat = (address) => /^0x[0-9a-fA-F]{40}$/.test(address);

export { validateAddressFormat };
