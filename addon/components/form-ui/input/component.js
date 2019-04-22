import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,
  classNames: ['form-group', 'form-ui-input'],
  type: 'text',
  rows: 10,
  cols: 40,
  min: 0,
  max: 100
});
