import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | form-ui/toggle', function (hooks) {
  setupRenderingTest(hooks);

  test('should render', async function (assert) {
    await render(hbs`{{form-ui/toggle label='Label' checked=value}}`);

    let component = this.element.querySelector('.form-group');
    assert.ok(component);

    let label = component.querySelector('label');
    let input = component.querySelector('input');
    assert.equal(label.textContent, 'Label');
    assert.notOk(input.checked, 'input has no value');

    await click(input);
    assert.ok(input.checked, 'input binds value');

    assert.equal(label.getAttribute('for'), input.id, 'label for and input id should be the same for much a11y win');
  });

  test('should render with label block', async function (assert) {
    await render(hbs `
      {{#form-ui/toggle checked=value as |ui|}}
        {{#ui.label}}
          <label for='{{ui.id}}'>block label</label><div class="random-div">random div</div>
        {{/ui.label}}
      {{/form-ui/toggle}}
    `);

    let component = this.element.querySelector('.form-group');
    assert.ok(component);

    let label = component.querySelector('label');
    let input = component.querySelector('input');
    assert.equal(label.textContent, 'block label');
    assert.ok(component.querySelector('.random-div'), 'random div is there');
    assert.notOk(input.checked, 'input has no value');

    await click(input);
    assert.ok(input.checked, 'input binds value');

    assert.equal(label.getAttribute('for'), input.id, 'label for and input id should be the same for much a11y win');
  });

  test('should render with after block', async function (assert) {
    await render(hbs `
      {{#form-ui/toggle checked=value label='Label' as |ui|}}
        {{#ui.after}}
          <div id={{ui.describedBy}} class="description">description</div>
        {{/ui.after}}
      {{/form-ui/toggle}}
    `);

    let component = this.element.querySelector('.form-group');
    assert.ok(component);

    let label = component.querySelector('label');
    let input = component.querySelector('input');
    let after = component.querySelector('.description');

    assert.equal(label.textContent, 'Label');
    assert.ok(after, 'after block renders');
    assert.notOk(input.checked, 'input has no value');

    await click(input);
    assert.ok(input.checked, 'input binds value');

    assert.equal(label.getAttribute('for'), input.id, 'label for and input id should be the same for much a11y win');
    assert.equal(after.id, input.getAttribute('aria-describedby'), 'after id and input aria-describedby should be the same for much a11y win');
  });
});
