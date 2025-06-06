'use client'
import { version, dependencies } from '../package.js';

const VERSION = version;
const API_VERSION = dependencies['@dynamic-labs/sdk-api-core'];

export { API_VERSION, VERSION };
