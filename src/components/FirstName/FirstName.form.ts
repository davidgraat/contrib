import baseTextFieldForm from 'formiojs/components/textfield/TextField.form';
import FirstNameEditValidation from './editForm/FirstName.edit.validation';
export default function(...extend) {
  return baseTextFieldForm([
    {
      key: 'validation',
      label: 'My Validation',
      components: FirstNameEditValidation
    }
  ], ...extend);
}
