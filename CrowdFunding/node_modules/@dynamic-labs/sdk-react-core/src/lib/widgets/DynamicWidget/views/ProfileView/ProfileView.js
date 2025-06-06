'use client'
import { jsx } from 'react/jsx-runtime';
import { UserProfile } from '../../../../components/UserProfile/UserProfile.js';

const ProfileView = () => (jsx(UserProfile, { rootClassName: 'profile-view' }));

export { ProfileView };
