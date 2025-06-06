'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dynamicEvents = require('../../../../events/dynamicEvents.cjs');

const useShowDynamicUserProfile = () => {
    const [showDynamicUserProfile, _setShowDynamicUserProfile] = React.useState(false);
    const setShowDynamicUserProfile = React.useCallback((value) => {
        _setShowDynamicUserProfile(value);
        if (!showDynamicUserProfile && value) {
            dynamicEvents.dynamicEvents.emit('userProfileOpen');
        }
        else if (showDynamicUserProfile && !value) {
            dynamicEvents.dynamicEvents.emit('userProfileClose');
        }
    }, [showDynamicUserProfile]);
    return { setShowDynamicUserProfile, showDynamicUserProfile };
};

exports.useShowDynamicUserProfile = useShowDynamicUserProfile;
