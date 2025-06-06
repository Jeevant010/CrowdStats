'use client'
import { jsx } from 'react/jsx-runtime';
import { Main } from './Main.js';
import { IsBrowser } from './components/IsBrowser/IsBrowser.js';

const DynamicAuthFlow = () => (jsx(IsBrowser, { children: jsx(Main, {}) }));

export { DynamicAuthFlow };
