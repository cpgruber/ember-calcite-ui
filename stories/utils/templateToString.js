export default (template) => {
  return template
    .replace(/(\{\{)/g, '{&#65279;{')
    .replace(/(\}\})/g, '}&#65279;}')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
};
