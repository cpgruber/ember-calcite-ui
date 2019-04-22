import { storiesOf } from '@storybook/ember';
import templates from './templates';
import formatTemplate from '../utils/formatTemplate';

const catalogName = 'Headings';

const catalog = storiesOf(catalogName, module);

Object.values(templates).forEach(story => {
  let { name, template, context } = story;
  catalog.add(name, () => formatTemplate(name, template, context));
});
