'use client'
const getSiweStatement = ({ appName, siweStatement, }) => {
    const defaultMessage = `Welcome to ${appName}. Signing is the only way we can truly know that you are the owner of the wallet you are connecting. Signing is a safe, gas-less transaction that does not in any way give ${appName} permission to perform any transactions with your wallet.`;
    return siweStatement || defaultMessage;
};

export { getSiweStatement };
