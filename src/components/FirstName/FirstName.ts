/**
 * This file shows how to create a custom component.
 *
 * Get the base component class by referencing Formio.Components.components map.
 */
import { Components } from 'formiojs';
import FormioUtils from 'formiojs/utils';
const TextFieldComponent = Components.components.textfield;
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

  constructor(component, options, data) {
    super(component, options, data);
    
  }

  init() {
      this.component.validate.custom = this.originalComponent.validate.custom = 'valid = input === "Bob" ? true : "Your name must be Bob";';
      
      return super.init();
  }

  /*static editForm() {
      const editForm = TextFieldComponent.editForm();
      FormioUtils.getComponent(editForm, 'validate.custom').type = 'hidden';
      return editForm;
  }*/

  static schema() {
    return TextFieldComponent.schema({
      type: 'firstname',
      /*validate: {
          custom: 'valid = input === "Joe" ? true : "Your name must be Joe";'
      }*/
    });
  }

  public static editForm = editForm;

  static get builderInfo() {
    return {
        title: 'First Name',
        group: 'basic',
        icon: 'fa fa-terminal',
        weight: 70,
        documentation: 'http://help.form.io/userguide/#table',
        schema: FirstName.schema()
    };
  }



  /**
   * After the html string has been mounted into the dom, the dom element is returned here. Use refs to find specific
   * elements to attach functionality to.
   *
   * @param element
   * @returns {Promise}
   */
  attach(element) {

    // Allow basic component functionality to attach like field logic and tooltips.
    return super.attach(element);
  }

  attachElement(element, index) {
      super.attachElement(element, index);
      console.log(Formio.Components.components.firstname.editForm());
      this.addEventListener(element, 'blur', (event) => {
        console.log(event);
      });
  }
}
