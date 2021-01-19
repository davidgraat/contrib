declare const TextFieldComponent: import("formiojs").ClassWithEditForm<typeof import("formiojs/types/components/_classes/widgetcomponent/widgetComponent").WidgetComponent>;
import editForm from './FirstName.form';
/**
 * Here we will derive from the base component which all Form.io form components derive from.
 *
 * @param component
 * @param options
 * @param data
 * @constructor
 */
export default class FirstName extends TextFieldComponent {
    constructor(component: any, options: any, data: any);
    init(): void;
    static schema(): import("formiojs").ExtendedComponentSchema<any>;
    static editForm: typeof editForm;
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        weight: number;
        documentation: string;
        schema: import("formiojs").ExtendedComponentSchema<any>;
    };
    /**
     * After the html string has been mounted into the dom, the dom element is returned here. Use refs to find specific
     * elements to attach functionality to.
     *
     * @param element
     * @returns {Promise}
     */
    attach(element: any): any;
    attachElement(element: any, index: any): void;
}
export {};
