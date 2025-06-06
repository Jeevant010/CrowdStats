'use client'
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { UserProfileIcon, SocialIcon } from '@dynamic-labs/iconic';
import { Image } from '../../../../../Image/Image.js';

const ConnectedAccountAvatar = ({ provider, avatarUrl, iconThemeVariant, }) => (jsxs(Fragment, { children: [jsx("div", { className: 'user-profile-social-account__connected-avatar', children: jsx(Image, { className: 'user-profile-social-account__image', src: avatarUrl, alt: 'User avatar', dataTestId: 'user-avatar', fallback: jsx(UserProfileIcon, {}) }) }), jsx("div", { className: 'user-profile-social-account__connected-provider-icon', children: jsx(SocialIcon, { name: provider, variant: iconThemeVariant }) })] }));

export { ConnectedAccountAvatar };
