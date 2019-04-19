import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from './template';

export default Component.extend({
  layout,

  tagName: 'button',

  classNames: ['btn'],

  classNameBindings: ['btnClass'],

  size: 'sm',

  btnClass: computed('size', function () {
    return this.size === 'md' ? 'btn-md' : 'btn-xl';
  }),

  click () {
    // debugger;
    console.log('clicked me');
  }
});
