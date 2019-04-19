/*
  Toggle input with consistent styling and a11y baked in. Plug and play.

  Ex:
  {{form-ui/toggle
    checked=bind.to.this.value
    label=(t (concat i18nScope '.label'))}}

  In block form, access the input's id via `ui.id` to make it accessible.
  Component yields anything above input element

  Component yields contextual components called 'label' and 'after', and exposes
  id and aria-describedby attribute values to make them a11y friendly for the input.

  {{#form-ui/toggle checked=bind.to.this.value as |ui|}}
    {{#ui.label}}
      <label for={{ui.id}}>Great a11y label</label>
    {{/ui.label}}
    {{#ui.after}}
      <div id={{ui.describedBy}} class="blah">
        Great a11y description
      </div>
    {{/ui.after}}
  {{/form-ui/toggle}}
*/

import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,
  classNames: ['form-group', 'form-ui-toggle', 'toggle-switch'],
});
