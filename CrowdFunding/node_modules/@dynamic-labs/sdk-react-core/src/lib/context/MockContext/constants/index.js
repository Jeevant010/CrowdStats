'use client'
const walletBookMock = {
    groups: {},
    wallets: {
        glow: {
            brand: {
                alt: 'Glow Wallet',
                spriteId: 'glow',
            },
            desktop: {
                chromeId: 'ojbcfhjmpigfobfclfflafhblgemeidi',
                edgeId: 'niihfokdlimbddhfmngnplgfcgpmlido',
                firefoxId: 'glow-solana-wallet',
            },
            name: 'Glow',
        },
        metamask: {
            brand: {
                alt: 'MetaMask Wallet',
                primaryColor: '#E8831D',
                spriteId: 'metamask',
            },
            chains: ['eip155:1'],
            desktop: {
                chromeId: 'nkbihfbeogaeaoehlefnkodbefgpgknn',
                edgeId: 'ejbalbakoplchlghecdalmeeeajnimhm',
                firefoxId: 'ether-metamask',
            },
            mobile: {
                androidId: 'io.metamask',
                iosId: 'id1438144202',
                native: 'metamask://wc',
                universal: 'https://metamask.app.link/wc',
            },
            name: 'MetaMask',
            shortName: 'MetaMask',
            walletConnect: {
                sdks: ['sign_v1', 'sign_v2'],
            },
        },
        phantom: {
            brand: {
                alt: 'Phantom Wallet',
                primaryColor: '#4B49C6',
                spriteId: 'phantom',
            },
            desktop: {
                chromeId: 'bfnaelmomeimhlpmgjnjophhpkkoljpa',
                firefoxId: 'phantom-app',
            },
            group: 'phantom',
            mobile: {
                androidId: 'app.phantom',
                iosId: 'id1598432977',
            },
            name: 'Phantom',
        },
    },
};

export { walletBookMock };
