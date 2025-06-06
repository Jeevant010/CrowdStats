'use client'
import { jsx } from 'react/jsx-runtime';
import { UserProfileIcon } from '@dynamic-labs/iconic';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import { Image } from '../Image/Image.js';

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
    return (jsx("div", { className: classNames('user-profile-social-account__connected-avatar', containerClassName), children: jsx(Image, { className: 'user-profile-social-account__image', src: source, alt: 'User avatar', dataTestId: 'user-avatar', fallback: jsx(UserProfileIcon, {}) }) }));
};

export { UserAvatar };
