'use client'
import { useState, useCallback } from 'react';
import { dynamicEvents } from '../../../../events/dynamicEvents.js';

const useShowDynamicUserProfile = () => {
    const [showDynamicUserProfile, _setShowDynamicUserProfile] = useState(false);
    const setShowDynamicUserProfile = useCallback((value) => {
        _setShowDynamicUserProfile(value);
        if (!showDynamicUserProfile && value) {
            dynamicEvents.emit('userProfileOpen');
        }
        else if (showDynamicUserProfile && !value) {
            dynamicEvents.emit('userProfileClose');
        }
    }, [showDynamicUserProfile]);
    return { setShowDynamicUserProfile, showDynamicUserProfile };
};

export { useShowDynamicUserProfile };
