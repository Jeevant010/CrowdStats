'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var iconic = require('@dynamic-labs/iconic');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
var Image = require('../Image/Image.cjs');

const UserAvatar = ({ user, containerClassName, renderWithFallback = true, }) => {
    const getConnectedSocialAccountAvatarUrl = () => {
        var _a, _b, _c;
        const avatarUrl = (_c = (_b = (_a = user === null || user === void 0 ? void 0 : user.verifiedCredentials) === null || _a === void 0 ? void 0 : _a.find((credential) => {
            var _a;
            return user.lastVerifiedCredentialId === credential.id &&
                ((_a = credential.oauthAccountPhotos) === null || _a === void 0 ? void 0 : _a.length);
        })) === null || _b === void 0 ? void 0 : _b.oauthAccountPhotos) === null || _c === void 0 ? void 0 : _c[0];
        return avatarUrl;
    };
    const source = getConnectedSocialAccountAvatarUrl();
    if (!source && !renderWithFallback)
        return null;
    return (jsxRuntime.jsx("div", { className: classNames.classNames('user-profile-social-account__connected-avatar', containerClassName), children: jsxRuntime.jsx(Image.Image, { className: 'user-profile-social-account__image', src: source, alt: 'User avatar', dataTestId: 'user-avatar', fallback: jsxRuntime.jsx(iconic.UserProfileIcon, {}) }) }));
};

exports.UserAvatar = UserAvatar;
