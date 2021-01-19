var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * This file shows how to create a custom component.
 *
 * Get the base component class by referencing Formio.Components.components map.
 */
import { Components } from 'formiojs';
var TextFieldComponent = Components.components.textfield;
import editForm from './FirstName.form';
/**
 * Here we will derive from the base component which all Form.io form components derive from.
 *
 * @param component
 * @param options
 * @param data
 * @constructor
 */
var FirstName = /** @class */ (function (_super) {
    __extends(FirstName, _super);
    function FirstName(component, options, data) {
        return _super.call(this, component, options, data) || this;
    }
    FirstName.prototype.init = function () {
        this.component.validate.custom = this.originalComponent.validate.custom = 'valid = input === "Bob" ? true : "Your name must be Bob";';
        return _super.prototype.init.call(this);
    };
    /*static editForm() {
        const editForm = TextFieldComponent.editForm();
        FormioUtils.getComponent(editForm, 'validate.custom').type = 'hidden';
        return editForm;
    }*/
    FirstName.schema = function () {
        return TextFieldComponent.schema({
            type: 'firstname',
        });
    };
    Object.defineProperty(FirstName, "builderInfo", {
        get: function () {
            return {
                title: 'First Name',
                group: 'basic',
                icon: 'fa fa-terminal',
                weight: 70,
                documentation: 'http://help.form.io/userguide/#table',
                schema: FirstName.schema()
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * After the html string has been mounted into the dom, the dom element is returned here. Use refs to find specific
     * elements to attach functionality to.
     *
     * @param element
     * @returns {Promise}
     */
    FirstName.prototype.attach = function (element) {
        // Allow basic component functionality to attach like field logic and tooltips.
        return _super.prototype.attach.call(this, element);
    };
    FirstName.prototype.attachElement = function (element, index) {
        _super.prototype.attachElement.call(this, element, index);
        console.log(Formio.Components.components.firstname.editForm());
        this.addEventListener(element, 'blur', function (event) {
            console.log(event);
        });
    };
    FirstName.editForm = editForm;
    return FirstName;
}(TextFieldComponent));
export default FirstName;
