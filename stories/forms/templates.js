const text = `
{{form-ui/input
  value=model
  label='label'
  description='description'}}`;

const textWithLabelBlock = `
{{#form-ui/input value=model as |ui|}}
  {{#ui.label}}
    <label for={{ui.id}}>Great a11y label</label>
  {{/ui.label}}
{{/form-ui/input}}`;

const textWithDescriptionBlock = `
{{#form-ui/input value=model as |ui|}}
  {{#ui.after}}
    <div id={{ui.describedBy}} style='background: green; color: white;'>
      Heyo custom description
    </div>
  {{/ui.after}}
{{/form-ui/input}}`;

const textarea = `
{{form-ui/input
  type='textarea'
  label='label'
  description='description'}}`;

const number = `
{{form-ui/input
  type='number'
  label='label'
  description='description'}}`;

const radios = `
{{form-ui/radios
  model=model
  radios=radios
  label='label'
  description='description'}}`;

const toggle = `
{{form-ui/toggle
    label='label'
    description='description'}}`

export default {text, textWithLabelBlock, textWithDescriptionBlock, textarea, number, radios, toggle};
