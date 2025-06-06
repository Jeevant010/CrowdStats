'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ProjectSettingsDesignButton = require('./ProjectSettingsDesignButton.cjs');
var ProjectSettingsDesignModal = require('./ProjectSettingsDesignModal.cjs');
var ProjectSettingsDesignWidget = require('./ProjectSettingsDesignWidget.cjs');

/* tslint:disable */
function ProjectSettingsDesignFromJSON(json) {
    return ProjectSettingsDesignFromJSONTyped(json);
}
function ProjectSettingsDesignFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'modal': !runtime.exists(json, 'modal') ? undefined : ProjectSettingsDesignModal.ProjectSettingsDesignModalFromJSON(json['modal']),
        'button': !runtime.exists(json, 'button') ? undefined : ProjectSettingsDesignButton.ProjectSettingsDesignButtonFromJSON(json['button']),
        'widget': !runtime.exists(json, 'widget') ? undefined : ProjectSettingsDesignWidget.ProjectSettingsDesignWidgetFromJSON(json['widget']),
    };
}
function ProjectSettingsDesignToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'modal': ProjectSettingsDesignModal.ProjectSettingsDesignModalToJSON(value.modal),
        'button': ProjectSettingsDesignButton.ProjectSettingsDesignButtonToJSON(value.button),
        'widget': ProjectSettingsDesignWidget.ProjectSettingsDesignWidgetToJSON(value.widget),
    };
}

exports.ProjectSettingsDesignFromJSON = ProjectSettingsDesignFromJSON;
exports.ProjectSettingsDesignFromJSONTyped = ProjectSettingsDesignFromJSONTyped;
exports.ProjectSettingsDesignToJSON = ProjectSettingsDesignToJSON;
