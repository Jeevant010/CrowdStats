'use client'
import { convertHexToRGBA } from '../functions/convertHexToRGBA/convertHexToRGBA.js';

const TEXT_LIGHT_PRIMARY = '#363A46';
convertHexToRGBA(TEXT_LIGHT_PRIMARY, 0.65);
convertHexToRGBA(TEXT_LIGHT_PRIMARY, 0.4);
const TEXT_DARK_BASE = '#F5F8FF';
convertHexToRGBA(TEXT_DARK_BASE, 0.95);
convertHexToRGBA(TEXT_DARK_BASE, 0.55);
convertHexToRGBA(TEXT_DARK_BASE, 0.4);

export { TEXT_LIGHT_PRIMARY };
