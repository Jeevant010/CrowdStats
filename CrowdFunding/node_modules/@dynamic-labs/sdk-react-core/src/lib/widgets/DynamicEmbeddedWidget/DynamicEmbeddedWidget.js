'use client'
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { DynamicEmbeddedAuthFlow } from './DynamicEmbeddedAuthFlow/DynamicEmbeddedAuthFlow.js';
import { DynamicEmbeddedUserProfile } from './DynamicEmbeddedUserProfile/DynamicEmbeddedUserProfile.js';

const DynamicEmbeddedWidget = ({ background = 'none', className, style, }) => (
// Only one of these 2 show at any given time, due these components' own definitions
jsxs(Fragment, { children: [jsx(DynamicEmbeddedAuthFlow, { background: background, className: className, style: style }), jsx(DynamicEmbeddedUserProfile, { background: background, className: className, style: style })] }));

export { DynamicEmbeddedWidget };
