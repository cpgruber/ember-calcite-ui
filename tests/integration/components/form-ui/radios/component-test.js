import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | form-ui/radios', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.set('items', [{label: 'radio 1', value: 1}, {label: 'radio 2', value: 2}]);
    this.set('model', 1);
  });

  test('should render', async function (assert) {
    await render(hbs`{{form-ui/radios label='Label' items=items model=model}}`);

    let component = this.element.querySelector('.form-group');
    assert.ok(component);

    let labels = [...component.querySelectorAll('label')];
    let label = labels[0];
    let radios = labels.splice(1);

    assert.equal(label.textContent, 'Label');
    await click(radios[1]);
    assert.equal(this.get('model'), 2, 'input binds value');

    assert.equal(component.getAttribute('aria-labelledby'), label.id, 'label id and component group aria-labelledby should be the same for much a11y win');
    assert.equal(radios[0].getAttribute('for'), radios[0].querySelector('input').id, 'radio label for and input id should be the same for much a11y win');
  });
});
