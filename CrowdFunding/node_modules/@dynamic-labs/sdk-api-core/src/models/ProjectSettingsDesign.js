import { exists } from '../runtime.js';
import { ProjectSettingsDesignButtonFromJSON, ProjectSettingsDesignButtonToJSON } from './ProjectSettingsDesignButton.js';
import { ProjectSettingsDesignModalFromJSON, ProjectSettingsDesignModalToJSON } from './ProjectSettingsDesignModal.js';
import { ProjectSettingsDesignWidgetFromJSON, ProjectSettingsDesignWidgetToJSON } from './ProjectSettingsDesignWidget.js';

/* tslint:disable */
function ProjectSettingsDesignFromJSON(json) {
    return ProjectSettingsDesignFromJSONTyped(json);
}
function ProjectSettingsDesignFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'modal': !exists(json, 'modal') ? undefined : ProjectSettingsDesignModalFromJSON(json['modal']),
        'button': !exists(json, 'button') ? undefined : ProjectSettingsDesignButtonFromJSON(json['button']),
        'widget': !exists(json, 'widget') ? undefined : ProjectSettingsDesignWidgetFromJSON(json['widget']),
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
        'modal': ProjectSettingsDesignModalToJSON(value.modal),
        'button': ProjectSettingsDesignButtonToJSON(value.button),
        'widget': ProjectSettingsDesignWidgetToJSON(value.widget),
    };
}

export { ProjectSettingsDesignFromJSON, ProjectSettingsDesignFromJSONTyped, ProjectSettingsDesignToJSON };
