'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class CustomFieldNotUniqueError extends DynamicError.DynamicError {
    constructor() {
        super('Custom Field for user must be unique within the environment', 'custom_field_data_not_unique');
    }
}

exports.CustomFieldNotUniqueError = CustomFieldNotUniqueError;
