import { compile } from 'ember-source/dist/ember-template-compiler';
import toString from './templateToString';

export default (template) => {
  let stringified = toString(template);
  let tmp = `
  <div class='container'>
    <div class='row'>
      <div class='col-md-6 col-md-offset-3 display-container'>
        <h5>Component</h5>
        <form class='component-container'>
          ${template}
        </form>
        <hr>
        <h5>Usage</h5>
        <pre>${stringified}</pre>
      </div>
    </div>
  </div>
  `;

  return compile(tmp);
};
