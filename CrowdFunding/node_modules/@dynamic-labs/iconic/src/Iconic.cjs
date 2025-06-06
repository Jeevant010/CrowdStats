'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var getIconicSpriteUrl = require('./helpers/getIconicSpriteUrl.cjs');

const ICONIC_SPRITE_URL = getIconicSpriteUrl.getIconicSpriteUrl();
const createIconic = (props) => {
    const Icon = Object.assign(Object.assign({}, props), { function: (props) => {
            const url = `${ICONIC_SPRITE_URL}#${Icon.iconName}`;
            return react.createElement('img', Object.assign(Object.assign({ 'data-testid': `iconic-${Icon.iconName}` }, props), { alt: Icon.alt, src: url }));
        } });
    const IconicComponent = Icon.function.bind(Icon);
    Object.assign(IconicComponent, {
        iconName: Icon.iconName,
        sourcePath: Icon.sourcePath,
    });
    return IconicComponent;
};

exports.ICONIC_SPRITE_URL = ICONIC_SPRITE_URL;
exports.createIconic = createIconic;
