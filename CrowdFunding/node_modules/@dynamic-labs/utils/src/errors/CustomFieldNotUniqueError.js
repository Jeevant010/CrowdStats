'use client'
import { DynamicError } from './DynamicError.js';

class CustomFieldNotUniqueError extends DynamicError {
    constructor() {
        super('Custom Field for user must be unique within the environment', 'custom_field_data_not_unique');
    }
}

export { CustomFieldNotUniqueError };
