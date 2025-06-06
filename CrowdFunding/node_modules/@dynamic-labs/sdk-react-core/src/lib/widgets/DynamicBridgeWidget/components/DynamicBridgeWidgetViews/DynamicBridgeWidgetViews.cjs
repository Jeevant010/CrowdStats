'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var DynamicBridgeWidgetContext = require('../../context/DynamicBridgeWidgetContext/DynamicBridgeWidgetContext.cjs');
var EditProfileView = require('../../views/EditProfileView/EditProfileView.cjs');
var ProfileView = require('../../views/ProfileView/ProfileView.cjs');
var WalletsView = require('../../views/WalletsView/WalletsView.cjs');

const mapViewToComponent = {
    'edit-profile': EditProfileView.EditProfileView,
    profile: ProfileView.ProfileView,
    wallets: WalletsView.WalletsView,
};
const DynamicBridgeWidgetViews = () => {
    const { bridgeWidgetView } = DynamicBridgeWidgetContext.useDynamicBridgeWidgetContext();
    const View = mapViewToComponent[bridgeWidgetView] || mapViewToComponent.wallets;
    return jsxRuntime.jsx(View, {});
};

exports.DynamicBridgeWidgetViews = DynamicBridgeWidgetViews;
