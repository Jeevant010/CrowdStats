'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getNewVerifiedCredentialsFromDiff = (verifiedCredentialsA, verifiedCredentialsB) => {
    const knownIds = verifiedCredentialsA.map((vc) => vc.id);
    return verifiedCredentialsB.filter((vc) => !knownIds.includes(vc.id));
};

exports.getNewVerifiedCredentialsFromDiff = getNewVerifiedCredentialsFromDiff;
