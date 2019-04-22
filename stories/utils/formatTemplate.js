import { compile } from 'ember-source/dist/ember-template-compiler';
import toString from './templateToString';

export default (catalog, name, tmp, context) => {
  let stringified = toString(tmp);

  let template = compile(`
  <div class='container'>
    <div class='row'>
      <div class='col-md-6 col-md-offset-3 display-container'>
        <h5>${catalog} | ${name}</h5>
        <div class='component-container'>
          ${tmp}
        </div>
        <hr>
        <h5>Usage</h5>
        <pre>${stringified}</pre>
      </div>
    </div>
  </div>
  `);

  if (!context) {
    context = {model: 'abc'};
  }

  return {template, context};
};
