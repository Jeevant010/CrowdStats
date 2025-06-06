'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var iconic = require('@dynamic-labs/iconic');
var Image = require('../../../../../Image/Image.cjs');

const ConnectedAccountAvatar = ({ provider, avatarUrl, iconThemeVariant, }) => (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { className: 'user-profile-social-account__connected-avatar', children: jsxRuntime.jsx(Image.Image, { className: 'user-profile-social-account__image', src: avatarUrl, alt: 'User avatar', dataTestId: 'user-avatar', fallback: jsxRuntime.jsx(iconic.UserProfileIcon, {}) }) }), jsxRuntime.jsx("div", { className: 'user-profile-social-account__connected-provider-icon', children: jsxRuntime.jsx(iconic.SocialIcon, { name: provider, variant: iconThemeVariant }) })] }));

exports.ConnectedAccountAvatar = ConnectedAccountAvatar;
