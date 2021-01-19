export default [
    {
        key: 'validateOn',
        label: 'ABC Validate On',
        weight: 0,
        ignore: true
    },
    {
        key: 'custom-validation-js',
        title: 'ABC Custom Validation',
        type: 'hidden',
        ignore: true
    },
    {
        input: true,
        key: "validate.justtesting",
        label: "Required",
        tooltip: "A required field must be filled in before the form can be submitted.",
        type: "checkbox",
        weight: 102
    }
];
/*import baseTextFieldFormValidation from 'formiojs/components/textfield/editForm/TextField.edit.validation';

export default function(...extend) {
    return baseTextFieldFormValidation([
        {
            key: 'validateOn',
            label: 'ABC Validate On'
        },
        {
            key: 'custom-validation-js',
            title: 'ABC Custom Validation',
            type: 'hidden'
        }
    ], ...extend);
  }*/ 
