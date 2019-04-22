import TextField from '@ember/component/text-field';
import Checkbox from '@ember/component/checkbox';

export function initialize () {
  TextField.reopen({
    attributeBindings: ['aria-label', 'aria-describedby', 'aria-labelledby']
  });
  Checkbox.reopen({
    attributeBindings: ['aria-label', 'aria-describedby', 'aria-labelledby', 'aria-checked']
  });
}
