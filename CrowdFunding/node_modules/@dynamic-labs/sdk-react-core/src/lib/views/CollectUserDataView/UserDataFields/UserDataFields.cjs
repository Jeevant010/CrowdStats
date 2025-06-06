'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var sdkApiCore = require('@dynamic-labs/sdk-api-core');
require('../../../utils/constants/colors.cjs');
require('../../../utils/constants/values.cjs');
var fields = require('../../../utils/constants/fields.cjs');
var useFields = require('../useFields.cjs');
var Tooltip = require('../../../components/Tooltip/Tooltip.cjs');
var UserField = require('./UserField/UserField.cjs');

/**
 * Gets the message to display in a tooltip for this field
 */
const getTooltipMessageKeyForField = ({ enabled, name, lockForVerification, }) => {
    if (name === 'email' && !enabled)
        return 'dyn_collect_user_data.update_email_tooltip';
    if (name === 'phoneNumber' && !enabled)
        return 'dyn_collect_user_data.update_phone_number_tooltip';
    if (lockForVerification)
        return 'dyn_collect_user_data.lock_editing_multiple_verified_fields';
    return undefined;
};
const UserDataFields = ({ errors, policiesConsentInnerComponentArray, fields: fields$1, touched, currentValues, disableEditingMultipleFieldsWithVerification, initialValues, }) => {
    const { fieldsConfig } = useFields.useFields();
    const { t } = reactI18next.useTranslation();
    /** Array of names of fields with verification enabled that the user has changed */
    const changedFieldsWithVerification = React.useMemo(() => initialValues && currentValues && fields$1
        ? fields$1
            .filter((field) => field.verify &&
            initialValues[field.name] !== currentValues[field.name])
            .map((field) => field.name)
        : [], [currentValues, fields$1, initialValues]);
    return (jsxRuntime.jsx("div", { className: 'user-data-fields__fields-column', children: fields$1 === null || fields$1 === void 0 ? void 0 : fields$1.map((fieldSettings) => {
            const { enabled, name, verify } = fieldSettings;
            // Do not render name service field in the user fields section
            if (name === fields.NAME_SERVICE_FIELD_NAME) {
                return undefined;
            }
            /**
             * Whether this field is disabled because we only want one field with verification
             * to be editable at once
             */
            const lockForVerification = disableEditingMultipleFieldsWithVerification &&
                verify &&
                changedFieldsWithVerification.length > 0 &&
                !changedFieldsWithVerification.includes(name);
            const disabled = !enabled || lockForVerification;
            const tooltipCopyKey = getTooltipMessageKeyForField({
                enabled,
                lockForVerification,
                name,
            });
            let fieldConfig;
            if (fieldSettings.type !== sdkApiCore.KycFieldType.Custom) {
                fieldConfig = fieldsConfig[name];
            }
            else {
                fieldConfig = {
                    isCustom: true,
                    key: fieldSettings.name,
                    label: fieldSettings.name,
                    type: fieldSettings.validationType,
                    validation: useFields.customFieldValidationMap[fieldSettings.validationType],
                    validationRules: fieldSettings.validationRules,
                };
            }
            const userField = (jsxRuntime.jsx(UserField.UserField, { disabled: Boolean(disabled), errors: errors, fieldData: fieldConfig, fieldSettings: fieldSettings, touched: touched, policiesConsentInnerComponentArray: policiesConsentInnerComponentArray }, fieldConfig.key));
            if (tooltipCopyKey)
                return (jsxRuntime.jsx(Tooltip.Tooltip, { content: t(tooltipCopyKey), className: 'user-data-fields__tooltip', copykey: tooltipCopyKey, children: userField }, fieldConfig.key + '__tooltip'));
            return userField;
        }) }));
};

exports.UserDataFields = UserDataFields;
