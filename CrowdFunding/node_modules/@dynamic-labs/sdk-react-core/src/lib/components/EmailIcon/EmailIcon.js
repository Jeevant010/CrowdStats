'use client'
import { jsx } from 'react/jsx-runtime';
import { Icon } from '../Icon/Icon.js';
import 'react';
import { ReactComponent as SvgSignInWithEmail } from '../../shared/assets/sign-in-with-email.js';
import '@dynamic-labs/iconic';
import '../../context/ViewContext/ViewContext.js';

const EmailIcon = (props) => (jsx(Icon, { color: 'brand-primary', children: jsx(SvgSignInWithEmail, Object.assign({}, props, { "data-testid": 'sign-in-with-email-icon' })) }));

export { EmailIcon };
