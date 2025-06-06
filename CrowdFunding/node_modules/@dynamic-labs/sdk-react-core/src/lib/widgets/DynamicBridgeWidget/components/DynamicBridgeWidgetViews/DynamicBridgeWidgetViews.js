'use client'
import { jsx } from 'react/jsx-runtime';
import { useDynamicBridgeWidgetContext } from '../../context/DynamicBridgeWidgetContext/DynamicBridgeWidgetContext.js';
import { EditProfileView } from '../../views/EditProfileView/EditProfileView.js';
import { ProfileView } from '../../views/ProfileView/ProfileView.js';
import { WalletsView } from '../../views/WalletsView/WalletsView.js';

const mapViewToComponent = {
    'edit-profile': EditProfileView,
    profile: ProfileView,
    wallets: WalletsView,
};
const DynamicBridgeWidgetViews = () => {
    const { bridgeWidgetView } = useDynamicBridgeWidgetContext();
    const View = mapViewToComponent[bridgeWidgetView] || mapViewToComponent.wallets;
    return jsx(View, {});
};

export { DynamicBridgeWidgetViews };
