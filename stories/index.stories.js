import { storiesOf } from '@storybook/ember';
import FormStories from './form-ui';

const forms = storiesOf('Forms', module);

Object.entries(FormStories).forEach(story => {
  let [name, template] = story;
  forms.add(name, () => template);
});
