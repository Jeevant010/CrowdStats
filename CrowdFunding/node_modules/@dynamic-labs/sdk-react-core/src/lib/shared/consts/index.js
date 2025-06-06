'use client'
import { getData } from 'country-list';

const tShirtSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];
// getData will contain a list of country codes and names
// eg: [ { code: "AU", name: "Australia" }]
const countryCodes = getData();
// see: dyn-1131 - this is a hardcoded list for animoca
// these will be removed once we have custom fields
const teamNames = [
    'Brunei DS',
    'Cambodia',
    'Indonesia',
    'Laos',
    'Malaysia',
    'Myanmar',
    'Philippines',
    'Singapore',
    'Thailand',
    'Vietnam',
];
const defaultWalletsForChains = {
    primary_chain: 'evm',
    wallets: {
        algorand: 'perawallet',
        bitcoin: 'xverse',
        cosmos: 'keplr',
        evm: 'metamask',
        flow: 'blocto',
        solana: 'phantom',
    },
};
// z-index
const tooltipZIndex = 2147483647;
const authModalZIndex = 2147483645;
const widgetModalZIndex = 2147483643;

export { authModalZIndex, countryCodes, defaultWalletsForChains, tShirtSizes, teamNames, tooltipZIndex, widgetModalZIndex };
