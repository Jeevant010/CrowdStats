'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var themesData = require('../../../context/ThemeContext/themesData.cjs');
var isThemeSetting = require('../typeGuard/isThemeSetting.cjs');

const parseTheme = (theme, projectSettingsDesignModal) => isThemeSetting.isThemeSetting(theme)
    ? themesData.getThemeConfig(projectSettingsDesignModal, theme)
    : theme;

exports.parseTheme = parseTheme;
