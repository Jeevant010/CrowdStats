'use client'
import { PlatformService } from '../services/PlatformService/PlatformService.js';
import '../../_virtual/_tslib.js';
import 'tldts';

const getTLD = () => PlatformService.getTLD();

export { getTLD };
