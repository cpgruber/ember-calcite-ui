import templates from './templates';
import formatTemplate from '../utils/formsTemplate';

export default {
  text: {
    template: formatTemplate(templates.text),
  },
  textWithLabelBlock: {
    template: formatTemplate(templates.textWithLabelBlock),
  },
  textWithDescriptionBlock: {
    template: formatTemplate(templates.textWithDescriptionBlock),
  },
  textarea: {
    template: formatTemplate(templates.textarea),
  },
  number: {
    template: formatTemplate(templates.number),
  },
  radios: {
    template: formatTemplate(templates.radios),
    context: {
      model: 0,
      radios: [{label: 'radio 0', value: 0}, {label: 'radio 1', value: 1}, {label: 'radio 2', value: 2}]
    }
  },
  toggle: {
    template: formatTemplate(templates.toggle),
  },
};
