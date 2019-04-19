import hbs from 'htmlbars-inline-precompile';

export default {
  text: {
    template: hbs`{{form-ui/input label='label' description='description'}}`
  },
  textarea: {
    template: hbs`{{form-ui/input label='label' description='description' type='textarea'}}`
  },
  number: {
    template: hbs`{{form-ui/input label='label' description='description' type='number'}}`
  }
}
