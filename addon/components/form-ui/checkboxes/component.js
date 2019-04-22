import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,
  classNames: ['form-group', 'form-ui-checkboxes'],
  attributeBindings: ['componentId:aria-labelledby'],

  init () {
    this._super(...arguments);
    this.set('componentId', `${this.elementId}-ui`);
  }
});
