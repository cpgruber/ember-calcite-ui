import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  tagName: 'li',
  classNames: ['form-ui-checkboxes-checkbox'],

  checked: computed('value', 'model', function () {
    let {value, model} = this.getProperties(['value', 'model']);
    return model.includes(value);
  }),

  actions: {
    onChange () {
      let idx = this.model.indexOf(this.value);
      let model = this.model.slice();
      if (idx > -1) {
        model.splice(idx, 1);
      } else {
        model.push(this.value);
      }
      this.set('model', model);
    }
  }
});
