'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var assertPackageVersion = require('@dynamic-labs/assert-package-version');
var _package = require('../package.cjs');
var WalletBookContext = require('./context/WalletBookContext.cjs');
var getWalletIconUrl = require('./helpers/getWalletIconUrl.cjs');
var getWalletBookWallet = require('./helpers/getWalletBookWallet.cjs');
var renderTemplate = require('./helpers/renderTemplate.cjs');
var findWalletBookWallet = require('./helpers/findWalletBookWallet.cjs');
var logger = require('./helpers/logger.cjs');
var getWalletGroup = require('./helpers/getWalletGroup.cjs');
var findWalletGroup = require('./helpers/findWalletGroup.cjs');
var getWalletBookCdnUrl = require('./helpers/getWalletBookCdnUrl.cjs');
var getBrandIconUrl = require('./helpers/getBrandIconUrl.cjs');
var findWalletGroupOverride = require('./helpers/findWalletGroupOverride.cjs');
var isWalletBookPopulated = require('./helpers/isWalletBookPopulated.cjs');
var findWalletBookWalletByNameAndChain = require('./helpers/findWalletBookWalletByNameAndChain.cjs');
var useWalletBookCdn = require('./hooks/useWalletBookCdn.cjs');
var WalletIcon = require('./components/WalletIcon.cjs');
var WalletBookContextProvider = require('./components/WalletBookContextProvider.cjs');
var BrandIcon = require('./components/BrandIcon.cjs');

assertPackageVersion.assertPackageVersion('@dynamic-labs/wallet-book', _package.version);

exports.useWalletBookContext = WalletBookContext.useWalletBookContext;
exports.getWalletIconUrl = getWalletIconUrl.getWalletIconUrl;
exports.getWalletBookWallet = getWalletBookWallet.getWalletBookWallet;
exports.renderTemplate = renderTemplate.renderTemplate;
exports.findWalletBookWallet = findWalletBookWallet.findWalletBookWallet;
exports.logger = logger.logger;
exports.getWalletGroup = getWalletGroup.getWalletGroup;
exports.findWalletGroup = findWalletGroup.findWalletGroup;
exports.getWalletBookCdnUrl = getWalletBookCdnUrl.getWalletBookCdnUrl;
exports.getBrandIconUrl = getBrandIconUrl.getBrandIconUrl;
exports.findWalletGroupOverride = findWalletGroupOverride.findWalletGroupOverride;
exports.isWalletBookPopulated = isWalletBookPopulated.isWalletBookPopulated;
exports.findWalletBookWalletByNameAndChain = findWalletBookWalletByNameAndChain.findWalletBookWalletByNameAndChain;
exports.useWalletBookCdn = useWalletBookCdn.useWalletBookCdn;
exports.WalletIcon = WalletIcon.WalletIcon;
exports.WalletBookContextProvider = WalletBookContextProvider.WalletBookContextProvider;
exports.BrandIcon = BrandIcon.BrandIcon;
