'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var convertHexToRGBA = require('../functions/convertHexToRGBA/convertHexToRGBA.cjs');

const TEXT_LIGHT_PRIMARY = '#363A46';
convertHexToRGBA.convertHexToRGBA(TEXT_LIGHT_PRIMARY, 0.65);
convertHexToRGBA.convertHexToRGBA(TEXT_LIGHT_PRIMARY, 0.4);
const TEXT_DARK_BASE = '#F5F8FF';
convertHexToRGBA.convertHexToRGBA(TEXT_DARK_BASE, 0.95);
convertHexToRGBA.convertHexToRGBA(TEXT_DARK_BASE, 0.55);
convertHexToRGBA.convertHexToRGBA(TEXT_DARK_BASE, 0.4);

exports.TEXT_LIGHT_PRIMARY = TEXT_LIGHT_PRIMARY;
