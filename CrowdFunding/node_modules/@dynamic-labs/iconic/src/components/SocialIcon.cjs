'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');
var react = require('react');
var findSocialIcon = require('./findSocialIcon.cjs');

const SocialIcon = (_a) => {
    var { name, variant } = _a, props = _tslib.__rest(_a, ["name", "variant"]);
    const Icon = findSocialIcon.findSocialIcon(name, variant);
    if (!Icon)
        return null;
    return react.createElement(Icon, props, null);
};

exports.SocialIcon = SocialIcon;
