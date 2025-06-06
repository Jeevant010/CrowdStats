'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var ModalHeader = require('../../../../../components/ModalHeader/ModalHeader.cjs');
var Typography = require('../../../../../components/Typography/Typography.cjs');
var IconButton = require('../../../../../components/IconButton/IconButton.cjs');
var DynamicWidgetContext = require('../../../context/DynamicWidgetContext.cjs');
var close = require('../../../../../shared/assets/close.cjs');
require('@dynamic-labs/iconic');
require('../../../../../context/ViewContext/ViewContext.cjs');
var TypographyButton = require('../../../../../components/TypographyButton/TypographyButton.cjs');
var useSessionKeys = require('../../../../../utils/hooks/useSessionKeys/useSessionKeys.cjs');
var getSessionInformation = require('../../../../../utils/functions/getSessionInformation/getSessionInformation.cjs');
var SessionPermissionsView = require('../../../../../views/SessionPermissionsView/SessionPermissionsView.cjs');
var AppOriginTile = require('../../../../../components/AppOriginTile/AppOriginTile.cjs');

const RevokeAccessView = ({ session }) => {
    const { t } = reactI18next.useTranslation();
    const { setDynamicWidgetView } = DynamicWidgetContext.useWidgetContext();
    const { revokeSession } = useSessionKeys.useSessionKeys();
    const displayName = React.useMemo(() => getSessionInformation.getSessionInformationName(session), [session]);
    const handleCancel = React.useCallback(() => {
        setDynamicWidgetView('session-management');
    }, [setDynamicWidgetView]);
    const handleRevoke = React.useCallback(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        try {
            yield revokeSession(session.sessionId);
            setDynamicWidgetView('session-management', {
                bannerMessage: {
                    message: t('dyn_session_management.revoke_access_view.success_message', {
                        sessionName: displayName,
                    }),
                    type: 'success',
                },
            });
        }
        catch (error) {
            setDynamicWidgetView('session-management', {
                bannerMessage: {
                    message: t('dyn_session_management.revoke_access_view.error_message', {
                        sessionName: displayName,
                    }),
                    type: 'error',
                },
            });
        }
    }), [displayName, revokeSession, session, setDynamicWidgetView, t]);
    const renderCloseButton = () => (jsxRuntime.jsx(IconButton.IconButton, { onClick: handleCancel, "aria-label": t('dyn_session_management.aria.close_button_label'), children: jsxRuntime.jsx(close.ReactComponent, {}) }));
    return (jsxRuntime.jsxs("div", { className: 'revoke-access-view', children: [jsxRuntime.jsx(ModalHeader.ModalHeader, { trailing: renderCloseButton(), children: jsxRuntime.jsx(Typography.Typography, { variant: 'title', color: 'primary', copykey: 'dyn_session_management.revoke_access_view.title', children: t('dyn_session_management.revoke_access_view.title') }) }), jsxRuntime.jsxs("div", { className: 'revoke-access-view__body', children: [jsxRuntime.jsx(AppOriginTile.AppOriginTile, { origin: displayName }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', color: 'primary', copykey: 'dyn_session_management.revoke_access_view.description', align: 'center', children: t('dyn_session_management.revoke_access_view.description') }), jsxRuntime.jsx(SessionPermissionsView.SessionPermissionsView, { session: session })] }), jsxRuntime.jsxs("div", { className: 'revoke-access-view__footer', children: [jsxRuntime.jsx(TypographyButton.TypographyButton, { buttonVariant: 'danger', buttonPadding: 'small', onClick: handleRevoke, dataTestId: 'revoke-access-confirm-button', copykey: 'dyn_session_management.revoke_access_view.revoke_button', expanded: true, children: t('dyn_session_management.revoke_access_view.revoke_button') }), jsxRuntime.jsx(TypographyButton.TypographyButton, { buttonPadding: 'small', onClick: handleCancel, dataTestId: 'revoke-access-cancel-button', copykey: 'dyn_session_management.revoke_access_view.cancel_button', expanded: true, children: t('dyn_session_management.revoke_access_view.cancel_button') })] })] }));
};

exports.RevokeAccessView = RevokeAccessView;
