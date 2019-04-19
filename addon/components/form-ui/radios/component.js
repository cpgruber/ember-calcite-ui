/*
  Radio button inputs with consistent styling and a11y baked in. Plug and play.

  Ex:
  {{form-ui/toggle
    checked=bind.to.this.value
    label=(t (concat i18nScope '.label'))}}

  In block form, access the input's id via `ui.id` to make it accessible.
  Component yields anything above input element

  Component yields contextual components called 'label' and 'after', and exposes
  id and aria-describedby attribute values to make them a11y friendly for the input.

  {{#form-ui/radios as |ui|}}
    {{#ui.radios}}
      <ul>
        {{#form-ui/radios/radio value='keyword' model=model.type idx=0}}
          {{t (concat i18nScope '.useKeyword')}}
          <span class="glyphicon glyphicon-question-sign" title="{{t (concat i18nScope '.useKeywordTooltip')}}" data-toggle="tooltip" data-placement="right" data-container="body"></span>
        {{/form-ui/radios/radio}}
        {{#form-ui/radios/radio value='group' model=model.type idx=1}}
          {{t (concat i18nScope '.useGroup')}}
          <span class="glyphicon glyphicon-question-sign" title="{{t (concat i18nScope '.useGroupTooltip')}}" data-toggle="tooltip" data-placement="right" data-container="body"></span>
        {{/form-ui/radios/radio}}
      </ul>
    {{/ui.radios}}
  {{/form-ui/radios}}
*/

import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,
  classNames: ['form-group', 'form-ui-radios'],
  attributeBindings: ['componentId:aria-labelledby', 'role'],
  role: 'radiogroup',

  init () {
    this._super(...arguments);
    this.set('componentId', `${this.elementId}-ui`);
  },

  actions: {
    updateRadio (value) {
      this.set('model', value);
    }
  }
});
