'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var chevronLeft = require('../../../../shared/assets/chevron-left.cjs');
var footerInfoIcon = require('../../../../shared/assets/footer-info-icon.cjs');
require('@dynamic-labs/iconic');
require('../../../../context/ViewContext/ViewContext.cjs');
var DynamicWidgetContext = require('../../context/DynamicWidgetContext.cjs');
var ModalHeader = require('../../../../components/ModalHeader/ModalHeader.cjs');
var Typography = require('../../../../components/Typography/Typography.cjs');
var IconButton = require('../../../../components/IconButton/IconButton.cjs');
var ErrorContainer = require('../../../../components/ErrorContainer/ErrorContainer.cjs');
var useSessionKeys = require('../../../../utils/hooks/useSessionKeys/useSessionKeys.cjs');
var EmptySessionsView = require('./EmptySessionsView/EmptySessionsView.cjs');
var SessionListItem = require('./SessionListItem/SessionListItem.cjs');

const SessionManagementView = ({ bannerMessage, }) => {
    const { t } = reactI18next.useTranslation();
    const { setDynamicWidgetView } = DynamicWidgetContext.useWidgetContext();
    const { listSessions } = useSessionKeys.useSessionKeys();
    const [sessions, setSessions] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        setLoading(true);
        listSessions()
            .then(setSessions)
            .finally(() => setLoading(false));
    }, [listSessions]);
    const handleBackButtonClick = React.useCallback(() => {
        setDynamicWidgetView('account-and-security-settings');
    }, [setDynamicWidgetView]);
    const handleInfoButtonClick = React.useCallback(() => {
        setDynamicWidgetView('session-management-info');
    }, [setDynamicWidgetView]);
    const handleRevokeAccessClick = React.useCallback((session) => {
        setDynamicWidgetView('session-management-revoke-access', {
            session,
        });
    }, [setDynamicWidgetView]);
    const renderBackButton = () => (jsxRuntime.jsx(IconButton.IconButton, { onClick: handleBackButtonClick, "aria-label": t('dyn_session_management.aria.back_button_label'), children: jsxRuntime.jsx(chevronLeft.ReactComponent, {}) }));
    const renderInfoButton = () => (jsxRuntime.jsx(IconButton.IconButton, { onClick: handleInfoButtonClick, "aria-label": t('dyn_session_management.aria.info_button_label'), children: jsxRuntime.jsx(footerInfoIcon.ReactComponent, {}) }));
    return (jsxRuntime.jsxs("div", { className: 'session-management-view', children: [jsxRuntime.jsx(ModalHeader.ModalHeader, { leading: renderBackButton(), trailing: renderInfoButton(), displayBorder: true, variant: 'filled', children: jsxRuntime.jsx(Typography.Typography, { variant: 'title', color: 'primary', copykey: 'dyn_session_management.title', children: t('dyn_session_management.title') }) }), jsxRuntime.jsx("div", { className: 'session-management-view__banner', children: bannerMessage && (jsxRuntime.jsx(ErrorContainer.ErrorContainer, { variant: bannerMessage.type, withIcon: false, children: bannerMessage.message })) }), jsxRuntime.jsx("div", { className: 'session-management-view__body', children: sessions.length === 0 ? (jsxRuntime.jsx(EmptySessionsView.EmptySessionsView, { loading: loading })) : (jsxRuntime.jsx("div", { className: 'session-management-view__sessions-container', children: sessions.map((session) => (jsxRuntime.jsx(SessionListItem.SessionListItem, { session: session, onRevokeAccessClick: handleRevokeAccessClick }, session.sessionId))) })) })] }));
};

exports.SessionManagementView = SessionManagementView;
