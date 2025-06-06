'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var assertPackageVersion = require('@dynamic-labs/assert-package-version');
var _package = require('../package.cjs');
var createStore = require('./lib/createStore/createStore.cjs');
var persist = require('./lib/persist/persist.cjs');
var subscribeWithSelector = require('./lib/subscribeWithSelector/subscribeWithSelector.cjs');

assertPackageVersion.assertPackageVersion('@dynamic-labs/store', _package.version);

exports.createStore = createStore.createStore;
exports.persist = persist.persist;
exports.subscribeWithSelector = subscribeWithSelector.subscribeWithSelector;
