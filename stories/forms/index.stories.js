import { storiesOf } from '@storybook/ember';
import templates from './templates';
import formatTemplate from '../utils/formatTemplate';

const catalogName = 'Forms';

const catalog = storiesOf(catalogName, module);

Object.values(templates).forEach(story => {
  let { name, template, context } = story;
  catalog.add(name, () => formatTemplate(catalogName, name, template, context));
});
