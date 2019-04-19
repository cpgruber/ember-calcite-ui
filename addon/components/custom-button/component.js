import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,

  tagName: 'button',

  click () {
    debugger;
    console.log('clicked me');
  }
});
