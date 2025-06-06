'use client'
import { __awaiter } from '../../../../../../../_virtual/_tslib.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalHeader } from '../../../../../components/ModalHeader/ModalHeader.js';
import { Typography } from '../../../../../components/Typography/Typography.js';
import { IconButton } from '../../../../../components/IconButton/IconButton.js';
import { useWidgetContext } from '../../../context/DynamicWidgetContext.js';
import { ReactComponent as SvgClose } from '../../../../../shared/assets/close.js';
import '@dynamic-labs/iconic';
import '../../../../../context/ViewContext/ViewContext.js';
import { TypographyButton } from '../../../../../components/TypographyButton/TypographyButton.js';
import { useSessionKeys } from '../../../../../utils/hooks/useSessionKeys/useSessionKeys.js';
import { getSessionInformationName } from '../../../../../utils/functions/getSessionInformation/getSessionInformation.js';
import { SessionPermissionsView } from '../../../../../views/SessionPermissionsView/SessionPermissionsView.js';
import { AppOriginTile } from '../../../../../components/AppOriginTile/AppOriginTile.js';

const RevokeAccessView = ({ session }) => {
    const { t } = useTranslation();
    const { setDynamicWidgetView } = useWidgetContext();
    const { revokeSession } = useSessionKeys();
    const displayName = useMemo(() => getSessionInformationName(session), [session]);
    const handleCancel = useCallback(() => {
        setDynamicWidgetView('session-management');
    }, [setDynamicWidgetView]);
    const handleRevoke = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
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
    const renderCloseButton = () => (jsx(IconButton, { onClick: handleCancel, "aria-label": t('dyn_session_management.aria.close_button_label'), children: jsx(SvgClose, {}) }));
    return (jsxs("div", { className: 'revoke-access-view', children: [jsx(ModalHeader, { trailing: renderCloseButton(), children: jsx(Typography, { variant: 'title', color: 'primary', copykey: 'dyn_session_management.revoke_access_view.title', children: t('dyn_session_management.revoke_access_view.title') }) }), jsxs("div", { className: 'revoke-access-view__body', children: [jsx(AppOriginTile, { origin: displayName }), jsx(Typography, { variant: 'body_normal', color: 'primary', copykey: 'dyn_session_management.revoke_access_view.description', align: 'center', children: t('dyn_session_management.revoke_access_view.description') }), jsx(SessionPermissionsView, { session: session })] }), jsxs("div", { className: 'revoke-access-view__footer', children: [jsx(TypographyButton, { buttonVariant: 'danger', buttonPadding: 'small', onClick: handleRevoke, dataTestId: 'revoke-access-confirm-button', copykey: 'dyn_session_management.revoke_access_view.revoke_button', expanded: true, children: t('dyn_session_management.revoke_access_view.revoke_button') }), jsx(TypographyButton, { buttonPadding: 'small', onClick: handleCancel, dataTestId: 'revoke-access-cancel-button', copykey: 'dyn_session_management.revoke_access_view.cancel_button', expanded: true, children: t('dyn_session_management.revoke_access_view.cancel_button') })] })] }));
};

export { RevokeAccessView };
