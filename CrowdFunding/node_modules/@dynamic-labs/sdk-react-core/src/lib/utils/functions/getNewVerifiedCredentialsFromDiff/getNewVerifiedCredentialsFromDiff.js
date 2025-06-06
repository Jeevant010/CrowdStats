'use client'
const getNewVerifiedCredentialsFromDiff = (verifiedCredentialsA, verifiedCredentialsB) => {
    const knownIds = verifiedCredentialsA.map((vc) => vc.id);
    return verifiedCredentialsB.filter((vc) => !knownIds.includes(vc.id));
};

export { getNewVerifiedCredentialsFromDiff };
