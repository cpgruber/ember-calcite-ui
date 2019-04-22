const text = {
  name: 'Text',
  template: `{{form-ui/input
  value=model
  label='label'
  description='description'}}`}

const textWithLabelBlock = {
  name: 'Text (custom label)',
  template: `{{#form-ui/input value=model as |ui|}}
  {{#ui.label}}
    <label for={{ui.id}}>Great a11y label</label>
  {{/ui.label}}
{{/form-ui/input}}`};

const textWithDescriptionBlock = {
  name: 'Text (custom description)',
  template: `{{#form-ui/input value=model as |ui|}}
  {{#ui.after}}
    <div id={{ui.describedBy}} style='background: green; color: white;'>
      Heyo custom description
    </div>
  {{/ui.after}}
{{/form-ui/input}}`};

const textarea = {
  name: 'Textarea',
  template: `{{form-ui/input
  type='textarea'
  value=model
  label='label'
  description='description'}}`};

const number = {
  name: 'Number',
  template: `{{form-ui/input
  type='number'
  value=model
  label='label'
  description='description'}}`,
  context: {
    model: 10
  }
};

const radios = {
  name: 'Radio',
  template: `{{form-ui/radios
  model=model
  items=items
  label='label'
  description='description'}}`,
  context: {
    model: 1,
    items: [{label: 'radio 1', value: 1}, {label: 'radio 2', value: 2}, {label: 'radio 3', value: 3}]
  }
};

const toggle = {
  name: 'Toggle',
  template: `{{form-ui/toggle
  checked=model
  label='label'
  description='description'}}`,
  context: {
    model: true
  }
};

const checkboxes = {
  name: 'Checkboxes',
  template: `{{form-ui/checkboxes
  model=model
  items=items
  label='label'
  description='description'}}`,
  context: {
    model: [1],
    items: [{label: 'checkbox 1', value: 1}, {label: 'checkbox 2', value: 2}, {label: 'checkbox 3', value: 3}]
  }
}

export default {text, textWithLabelBlock, textWithDescriptionBlock, textarea, number, radios, toggle, checkboxes};
