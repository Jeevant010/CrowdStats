'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var assertPackageVersion = require('@dynamic-labs/assert-package-version');
var _package = require('../package.cjs');
var EthereumWalletConnector = require('./connector/EthereumWalletConnector.cjs');
var isEthWalletConnector = require('./connector/isEthWalletConnector/isEthWalletConnector.cjs');
var createConnector = require('./connector/createConnector/createConnector.cjs');
require('./rpc/RpcProvidersEthereum/RpcProvidersEthereum.cjs');
var rpcProviders = require('@dynamic-labs/rpc-providers');
var evmProvidersSelector = require('./rpc/evmProvidersSelector/evmProvidersSelector.cjs');
var ViemRpcUiTransaction = require('./utils/viem/ViemRpcUiTransaction/ViemRpcUiTransaction.cjs');
var ViemUiTransaction = require('./utils/viem/ViemUiTransaction/ViemUiTransaction.cjs');
var chainsMap = require('./utils/viem/chainsMap/chainsMap.cjs');
var confirmationTransport = require('./utils/viem/confirmationTransport/confirmationTransport.cjs');
var createTransportWithUiConfirmation = require('./utils/viem/createTransportWithUiConfirmation/createTransportWithUiConfirmation.cjs');
var createViemUiTransaction = require('./utils/viem/createViemUiTransaction/createViemUiTransaction.cjs');
var createWalletClientWithUiConfirmation = require('./utils/viem/createWalletClientWithUiConfirmation/createWalletClientWithUiConfirmation.cjs');
var getOrMapViemChain = require('./utils/viem/getOrMapViemChain/getOrMapViemChain.cjs');
var hasAtomicStatusCapability = require('./utils/viem/hasAtomicStatusCapability/hasAtomicStatusCapability.cjs');
var hasPaymasterServiceCapability = require('./utils/viem/hasPaymasterServiceCapability/hasPaymasterServiceCapability.cjs');
var unFormatTransaction = require('./utils/viem/unFormatTransaction/unFormatTransaction.cjs');
var abi = require('./utils/viem/erc20/abi.cjs');
var interceptTransport = require('./utils/viem/interceptTransport/interceptTransport.cjs');
var findEvmNetwork = require('./utils/findEvmNetwork/findEvmNetwork.cjs');
var getNameservice = require('./utils/getNameservice/getNameservice.cjs');
var validateAddressFormat = require('./utils/validateAddressFormat/validateAddressFormat.cjs');
var parseAddress = require('./utils/parseAddress/parseAddress.cjs');
var normalizeRpcError = require('./utils/normalizeRpcError/normalizeRpcError.cjs');
var EthereumWallet = require('./wallet/EthereumWallet.cjs');
var isEthereumWallet = require('./wallet/isEthereumWallet/isEthereumWallet.cjs');

assertPackageVersion.assertPackageVersion('@dynamic-labs/ethereum-core', _package.version);

exports.EthereumWalletConnector = EthereumWalletConnector.EthereumWalletConnector;
exports.isEthWalletConnector = isEthWalletConnector.isEthWalletConnector;
exports.createConnector = createConnector.createConnector;
exports.evmProvidersSelector = evmProvidersSelector.evmProvidersSelector;
exports.ViemRpcUiTransaction = ViemRpcUiTransaction.ViemRpcUiTransaction;
exports.ViemUiTransaction = ViemUiTransaction.ViemUiTransaction;
exports.chainsMap = chainsMap.chainsMap;
exports.confirmationTransport = confirmationTransport.confirmationTransport;
exports.createTransportWithUiConfirmation = createTransportWithUiConfirmation.createTransportWithUiConfirmation;
exports.createViemUiTransaction = createViemUiTransaction.createViemUiTransaction;
exports.createWalletClientWithUiConfirmation = createWalletClientWithUiConfirmation.createWalletClientWithUiConfirmation;
exports.getChain = getOrMapViemChain.getChain;
exports.getOrMapViemChain = getOrMapViemChain.getOrMapViemChain;
exports.mapChain = getOrMapViemChain.mapChain;
exports.hasAtomicStatusCapability = hasAtomicStatusCapability.hasAtomicStatusCapability;
exports.hasPaymasterServiceCapability = hasPaymasterServiceCapability.hasPaymasterServiceCapability;
exports.unFormatTransaction = unFormatTransaction.unFormatTransaction;
exports.erc20Abi = abi.erc20Abi;
exports.interceptTransport = interceptTransport.interceptTransport;
exports.findEvmNetwork = findEvmNetwork.findEvmNetwork;
exports.getNameservice = getNameservice.getNameservice;
exports.validateAddressFormat = validateAddressFormat.validateAddressFormat;
exports.parseAddress = parseAddress.parseAddress;
exports.normalizeRpcError = normalizeRpcError.normalizeRpcError;
exports.EthereumWallet = EthereumWallet.EthereumWallet;
exports.isEthereumWallet = isEthereumWallet.isEthereumWallet;
Object.keys(rpcProviders).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return rpcProviders[k]; }
	});
});
