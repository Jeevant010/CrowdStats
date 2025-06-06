'use client'
import { jsx } from 'react/jsx-runtime';
import { Icon } from '../Icon/Icon.js';
import 'react';
import { ReactComponent as SvgSignInWithPhone } from '../../shared/assets/sign-in-with-phone.js';
import '@dynamic-labs/iconic';
import '../../context/ViewContext/ViewContext.js';

const PhoneIcon = (props) => (jsx(Icon, { color: 'brand-primary', children: jsx(SvgSignInWithPhone, Object.assign({}, props, { "data-testid": 'sign-in-with-sms-icon' })) }));

export { PhoneIcon };
