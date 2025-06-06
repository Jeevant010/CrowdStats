'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var renderTemplate = require('./renderTemplate.cjs');

const getBrandIconUrl = (brand) => {
    if (brand.spriteId) {
        return renderTemplate.renderTemplate('iconicUrl', brand.spriteId);
    }
    return '';
};

exports.getBrandIconUrl = getBrandIconUrl;
