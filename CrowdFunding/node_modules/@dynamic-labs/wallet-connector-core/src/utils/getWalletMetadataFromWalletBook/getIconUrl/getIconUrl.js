'use client'
import { renderTemplate } from '@dynamic-labs/wallet-book';

const getIconUrl = (spriteId) => {
    if (!spriteId) {
        return renderTemplate('iconicUrl', 'defaultwallet');
    }
    return renderTemplate('iconicUrl', spriteId);
};

export { getIconUrl };
