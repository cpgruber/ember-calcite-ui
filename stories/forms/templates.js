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
  radios=radios
  label='label'
  description='description'}}`,
  context: {
    model: 0,
    radios: [{label: 'radio 0', value: 0}, {label: 'radio 1', value: 1}, {label: 'radio 2', value: 2}]
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

export default {text, textWithLabelBlock, textWithDescriptionBlock, textarea, number, radios, toggle};
