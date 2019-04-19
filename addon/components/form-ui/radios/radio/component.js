import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  tagName: 'li',
  classNames: ['form-ui-radios-radio'],

  tabindex: computed('idx', function () {
    let idx = this.get('idx');
    if (idx === 0) {
      return '0';
    } else if (idx) {
      return '-1';
    }
  }),

  actions: {
    updateRadio (value) {
      this.set('model', value);
    }
  }
});
