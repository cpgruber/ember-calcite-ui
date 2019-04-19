import { compile } from 'ember-source/dist/ember-template-compiler';
import toString from './templateToString';

export default (template) => {
  let tmp = `
  <div class='container'>
    <div class='row'>
      <div class='col-md-6 col-md-offset-3'>
        <form>
          ${template}
        </form>

        <pre>${toString(template)}</pre>
      </div>
    </div>
  </div>
  `;
  return compile(tmp);
};
