export default (template) => {
  return template.replace('{{', '{ {').replace('}}', '} }');
};
