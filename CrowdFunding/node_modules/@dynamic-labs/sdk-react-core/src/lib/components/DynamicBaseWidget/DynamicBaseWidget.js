'use client'
import { jsx } from 'react/jsx-runtime';
import '../Popper/Popper/Popper.js';
import { PopperProvider } from '../Popper/PopperContext/PopperContext.js';
import { ShadowDOM } from '../ShadowDOM/ShadowDOM.js';

const DynamicBaseWidget = ({ children, shadowDOMProps }) => (jsx(ShadowDOM, Object.assign({}, shadowDOMProps, { children: jsx(PopperProvider, { children: children }) })));

export { DynamicBaseWidget };
