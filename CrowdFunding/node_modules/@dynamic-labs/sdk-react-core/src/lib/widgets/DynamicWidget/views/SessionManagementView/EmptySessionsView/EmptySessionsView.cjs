'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
var Typography = require('../../../../../components/Typography/Typography.cjs');

const EmptySessionsView = ({ loading }) => {
    const { t } = reactI18next.useTranslation();
    return (jsxRuntime.jsx("div", { className: 'empty-sessions-view', children: jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', color: 'secondary', children: loading
                ? t('dyn_session_management.empty_sessions_view.loading')
                : t('dyn_session_management.empty_sessions_view.title') }) }));
};

exports.EmptySessionsView = EmptySessionsView;
