'use client'
import { __awaiter } from '../../../_virtual/_tslib.js';
import { keccak256, namehash, encodePacked } from 'viem';
import L2ResolverAbi from '../L2ResolverAbi/L2ResolverAbi.js';

const getNameservice = (_a) => __awaiter(void 0, [_a], void 0, function* ({ rpcProvider, address, }) {
    const nsData = {
        avatar: undefined,
        name: undefined,
    };
    const network = yield rpcProvider.getChainId();
    if (!network) {
        return nsData;
    }
    // per CB team they recommended using the code
    // from: https://github.com/coinbase/onchainkit/blob/main/src/identity/utils/getName.ts
    // Once they will have proper resolver for the ens names we can remove this code
    const convertReverseNodeToBytes = (address, chainId) => {
        const addressFormatted = address.toLocaleLowerCase();
        const addressNode = keccak256(addressFormatted.substring(2));
        const chainCoinType = convertChainIdToCoinType(chainId);
        const baseReverseNode = namehash(`${chainCoinType.toLocaleUpperCase()}.reverse`);
        const addressReverseNode = keccak256(encodePacked(['bytes32', 'bytes32'], [baseReverseNode, addressNode]));
        return addressReverseNode;
    };
    const convertChainIdToCoinType = (chainId) => {
        const cointype = (0x80000000 | chainId) >>> 0;
        return cointype.toString(16).toLocaleUpperCase();
    };
    if (network === 8453) {
        const addressReverseNode = convertReverseNodeToBytes(address, 8453);
        try {
            const baseName = yield rpcProvider.readContract({
                abi: L2ResolverAbi,
                address: '0xC6d566A56A1aFf6508b41f6c90ff131615583BCD',
                args: [addressReverseNode],
                functionName: 'name',
            });
            if (baseName) {
                nsData.name = baseName;
                return nsData;
            }
        }
        catch (_error) {
            // This is a best effort attempt, so we don't need to do anything here.
            return nsData;
        }
    }
    else {
        nsData.name = (yield rpcProvider.getEnsName({
            address: address,
        }));
        nsData.avatar = nsData.name
            ? (yield rpcProvider.getEnsAvatar({
                name: nsData.name,
            }))
            : undefined;
    }
    return nsData;
});

export { getNameservice };
