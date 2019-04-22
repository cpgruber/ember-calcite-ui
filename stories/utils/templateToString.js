export default (template) => {
  return template
    .replace(/{/g, '&#123;')
    .replace(/}/g, '&#125;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
};
