import { storiesOf } from '@storybook/ember';
import FormStories from './forms';

const forms = storiesOf('Forms', module);

Object.entries(FormStories).forEach(story => {
  let [name, template] = story;
  forms.add(name, () => template);
});
