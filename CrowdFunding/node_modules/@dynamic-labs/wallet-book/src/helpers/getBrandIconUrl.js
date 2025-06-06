'use client'
import { renderTemplate } from './renderTemplate.js';

const getBrandIconUrl = (brand) => {
    if (brand.spriteId) {
        return renderTemplate('iconicUrl', brand.spriteId);
    }
    return '';
};

export { getBrandIconUrl };
