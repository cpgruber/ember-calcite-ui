import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | form-ui/input', function (hooks) {
  setupRenderingTest(hooks);

  test('should render', async function (assert) {
    await render(hbs`{{form-ui/input label='Label' placeholder='Placeholder' value=value}}`);

    let component = this.element.querySelector('.form-group');
    assert.ok(component);

    let label = component.querySelector('label');
    let input = component.querySelector('input');
    assert.equal(label.textContent, 'Label');
    assert.notOk(input.value, 'input has no value');

    await fillIn(input, 'new value');
    assert.equal(input.value, 'new value', 'input binds value');

    assert.equal(label.getAttribute('for'), input.id, 'label for and input id should be the same for much a11y win');
  });

  test('should render with label block', async function (assert) {
    await render(hbs `
      {{#form-ui/input value=value as |ui|}}
        {{#ui.label}}
          <label for='{{ui.id}}'>block label</label><div class="random-div">random div</div>
        {{/ui.label}}
      {{/form-ui/input}}
    `);

    let component = this.element.querySelector('.form-group');
    assert.ok(component);

    let label = component.querySelector('label');
    let input = component.querySelector('input');
    assert.equal(label.textContent, 'block label');
    assert.ok(component.querySelector('.random-div'), 'random div is there');
    assert.notOk(input.value, 'input has no value');

    await fillIn(input, 'new value');
    assert.equal(input.value, 'new value', 'input binds value');

    assert.equal(label.getAttribute('for'), input.id, 'label for and input id should be the same for much a11y win');
  });

  test('should render with after block', async function (assert) {
    await render(hbs `
      {{#form-ui/input value=value label='Label' as |ui|}}
        {{#ui.after}}
          <div id={{ui.describedBy}} class="description">description</div>
        {{/ui.after}}
      {{/form-ui/input}}
    `);

    let component = this.element.querySelector('.form-group');
    assert.ok(component);

    let label = component.querySelector('label');
    let input = component.querySelector('input');
    let after = component.querySelector('.description');

    assert.equal(label.textContent, 'Label');
    assert.ok(after, 'after block renders');
    assert.notOk(input.value, 'input has no value');

    await fillIn(input, 'new value');
    assert.equal(input.value, 'new value', 'input binds value');

    assert.equal(label.getAttribute('for'), input.id, 'label for and input id should be the same for much a11y win');
    assert.equal(after.id, input.getAttribute('aria-describedby'), 'after id and input aria-describedby should be the same for much a11y win');
  });

  test('should render textarea', async function (assert) {
    await render(hbs`{{form-ui/input label='Label' placeholder='Placeholder' value=value type='textarea'}}`);

    let component = this.element.querySelector('.form-group');
    assert.ok(component);

    let label = component.querySelector('label');
    let textarea = component.querySelector('textarea');
    let input = component.querySelector('input');
    assert.equal(label.textContent, 'Label');
    assert.notOk(input);
    assert.notOk(textarea.value, 'textarea has no value');

    await fillIn(textarea, 'new value');
    assert.equal(textarea.value, 'new value', 'textarea binds value');

    assert.equal(label.getAttribute('for'), textarea.id, 'label for and textarea id should be the same for much a11y win');
  });
});
