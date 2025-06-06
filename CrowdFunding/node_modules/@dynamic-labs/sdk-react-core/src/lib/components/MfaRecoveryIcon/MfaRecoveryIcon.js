'use client'
import { jsx } from 'react/jsx-runtime';
import { Icon } from '../Icon/Icon.js';
import 'react';
import { ReactComponent as SvgMfaRecoveryIcon } from '../../shared/assets/mfa-recovery-icon.js';
import '@dynamic-labs/iconic';
import '../../context/ViewContext/ViewContext.js';

const MfaRecoveryScreenIcon = (props) => (jsx(Icon, { color: 'brand-primary', children: jsx(SvgMfaRecoveryIcon, Object.assign({}, props, { "data-testid": 'mfa-recovery-icon' })) }));

export { MfaRecoveryScreenIcon };
