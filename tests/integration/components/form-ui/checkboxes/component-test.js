import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | form-ui/checkboxes', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.set('items', [{label: 'checkbox 1', value: 1}, {label: 'checkbox 2', value: 2}]);
    this.set('model', [1]);
  });

  test('should render', async function (assert) {
    await render(hbs`{{form-ui/checkboxes label='Label' items=items model=model}}`);

    let component = this.element.querySelector('.form-group');
    assert.ok(component);

    let labels = [...component.querySelectorAll('label')];
    let label = labels[0];
    let checkboxes = labels.splice(1);

    assert.equal(label.textContent, 'Label');
    await click(checkboxes[1]);
    assert.deepEqual(this.get('model'), [1,2], 'input binds value');

    assert.equal(component.getAttribute('aria-labelledby'), label.id, 'label id and component group aria-labelledby should be the same for much a11y win');
    assert.equal(checkboxes[0].getAttribute('for'), checkboxes[0].querySelector('input').id, 'radio label for and input id should be the same for much a11y win');
  });
});
