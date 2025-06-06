'use client'
const isValidMfaRecoveryCode = (text) => {
    const regex = /^[a-zA-Z0-9]{10}$/;
    return regex.test(text);
};

export { isValidMfaRecoveryCode };
