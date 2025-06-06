'use client'
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as SvgChevronLeft } from '../../../../shared/assets/chevron-left.js';
import { ReactComponent as SvgFooterInfoIcon } from '../../../../shared/assets/footer-info-icon.js';
import '@dynamic-labs/iconic';
import '../../../../context/ViewContext/ViewContext.js';
import { useWidgetContext } from '../../context/DynamicWidgetContext.js';
import { ModalHeader } from '../../../../components/ModalHeader/ModalHeader.js';
import { Typography } from '../../../../components/Typography/Typography.js';
import { IconButton } from '../../../../components/IconButton/IconButton.js';
import { ErrorContainer } from '../../../../components/ErrorContainer/ErrorContainer.js';
import { useSessionKeys } from '../../../../utils/hooks/useSessionKeys/useSessionKeys.js';
import { EmptySessionsView } from './EmptySessionsView/EmptySessionsView.js';
import { SessionListItem } from './SessionListItem/SessionListItem.js';

const SessionManagementView = ({ bannerMessage, }) => {
    const { t } = useTranslation();
    const { setDynamicWidgetView } = useWidgetContext();
    const { listSessions } = useSessionKeys();
    const [sessions, setSessions] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        listSessions()
            .then(setSessions)
            .finally(() => setLoading(false));
    }, [listSessions]);
    const handleBackButtonClick = useCallback(() => {
        setDynamicWidgetView('account-and-security-settings');
    }, [setDynamicWidgetView]);
    const handleInfoButtonClick = useCallback(() => {
        setDynamicWidgetView('session-management-info');
    }, [setDynamicWidgetView]);
    const handleRevokeAccessClick = useCallback((session) => {
        setDynamicWidgetView('session-management-revoke-access', {
            session,
        });
    }, [setDynamicWidgetView]);
    const renderBackButton = () => (jsx(IconButton, { onClick: handleBackButtonClick, "aria-label": t('dyn_session_management.aria.back_button_label'), children: jsx(SvgChevronLeft, {}) }));
    const renderInfoButton = () => (jsx(IconButton, { onClick: handleInfoButtonClick, "aria-label": t('dyn_session_management.aria.info_button_label'), children: jsx(SvgFooterInfoIcon, {}) }));
    return (jsxs("div", { className: 'session-management-view', children: [jsx(ModalHeader, { leading: renderBackButton(), trailing: renderInfoButton(), displayBorder: true, variant: 'filled', children: jsx(Typography, { variant: 'title', color: 'primary', copykey: 'dyn_session_management.title', children: t('dyn_session_management.title') }) }), jsx("div", { className: 'session-management-view__banner', children: bannerMessage && (jsx(ErrorContainer, { variant: bannerMessage.type, withIcon: false, children: bannerMessage.message })) }), jsx("div", { className: 'session-management-view__body', children: sessions.length === 0 ? (jsx(EmptySessionsView, { loading: loading })) : (jsx("div", { className: 'session-management-view__sessions-container', children: sessions.map((session) => (jsx(SessionListItem, { session: session, onRevokeAccessClick: handleRevokeAccessClick }, session.sessionId))) })) })] }));
};

export { SessionManagementView };
