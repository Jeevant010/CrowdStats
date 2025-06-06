'use client'
import { createElement } from 'react';
import { getIconicSpriteUrl } from './helpers/getIconicSpriteUrl.js';

const ICONIC_SPRITE_URL = getIconicSpriteUrl();
const createIconic = (props) => {
    const Icon = Object.assign(Object.assign({}, props), { function: (props) => {
            const url = `${ICONIC_SPRITE_URL}#${Icon.iconName}`;
            return createElement('img', Object.assign(Object.assign({ 'data-testid': `iconic-${Icon.iconName}` }, props), { alt: Icon.alt, src: url }));
        } });
    const IconicComponent = Icon.function.bind(Icon);
    Object.assign(IconicComponent, {
        iconName: Icon.iconName,
        sourcePath: Icon.sourcePath,
    });
    return IconicComponent;
};

export { ICONIC_SPRITE_URL, createIconic };
