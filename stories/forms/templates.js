const text = `
{{form-ui/input
  label='label'
  description='description'}}`;

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

export default {text, textarea, number, radios, toggle};
