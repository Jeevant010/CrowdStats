'use client'
import { jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { KycFieldType } from '@dynamic-labs/sdk-api-core';
import '../../../utils/constants/colors.js';
import '../../../utils/constants/values.js';
import { NAME_SERVICE_FIELD_NAME } from '../../../utils/constants/fields.js';
import { useFields, customFieldValidationMap } from '../useFields.js';
import { Tooltip } from '../../../components/Tooltip/Tooltip.js';
import { UserField } from './UserField/UserField.js';

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
const UserDataFields = ({ errors, policiesConsentInnerComponentArray, fields, touched, currentValues, disableEditingMultipleFieldsWithVerification, initialValues, }) => {
    const { fieldsConfig } = useFields();
    const { t } = useTranslation();
    /** Array of names of fields with verification enabled that the user has changed */
    const changedFieldsWithVerification = useMemo(() => initialValues && currentValues && fields
        ? fields
            .filter((field) => field.verify &&
            initialValues[field.name] !== currentValues[field.name])
            .map((field) => field.name)
        : [], [currentValues, fields, initialValues]);
    return (jsx("div", { className: 'user-data-fields__fields-column', children: fields === null || fields === void 0 ? void 0 : fields.map((fieldSettings) => {
            const { enabled, name, verify } = fieldSettings;
            // Do not render name service field in the user fields section
            if (name === NAME_SERVICE_FIELD_NAME) {
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
            if (fieldSettings.type !== KycFieldType.Custom) {
                fieldConfig = fieldsConfig[name];
            }
            else {
                fieldConfig = {
                    isCustom: true,
                    key: fieldSettings.name,
                    label: fieldSettings.name,
                    type: fieldSettings.validationType,
                    validation: customFieldValidationMap[fieldSettings.validationType],
                    validationRules: fieldSettings.validationRules,
                };
            }
            const userField = (jsx(UserField, { disabled: Boolean(disabled), errors: errors, fieldData: fieldConfig, fieldSettings: fieldSettings, touched: touched, policiesConsentInnerComponentArray: policiesConsentInnerComponentArray }, fieldConfig.key));
            if (tooltipCopyKey)
                return (jsx(Tooltip, { content: t(tooltipCopyKey), className: 'user-data-fields__tooltip', copykey: tooltipCopyKey, children: userField }, fieldConfig.key + '__tooltip'));
            return userField;
        }) }));
};

export { UserDataFields };
