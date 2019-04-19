/* eslint-disable import/extensions */
import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

storiesOf('Forms', module)
  .add('heyo', () => {
    return {
      template: hbs`{{custom-button}}`,
      context: {}
    }
  })
