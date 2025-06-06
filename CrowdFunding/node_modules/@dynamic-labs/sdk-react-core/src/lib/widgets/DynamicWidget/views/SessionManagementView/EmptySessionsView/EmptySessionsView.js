'use client'
import { jsx } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { Typography } from '../../../../../components/Typography/Typography.js';

const EmptySessionsView = ({ loading }) => {
    const { t } = useTranslation();
    return (jsx("div", { className: 'empty-sessions-view', children: jsx(Typography, { variant: 'body_normal', color: 'secondary', children: loading
                ? t('dyn_session_management.empty_sessions_view.loading')
                : t('dyn_session_management.empty_sessions_view.title') }) }));
};

export { EmptySessionsView };
