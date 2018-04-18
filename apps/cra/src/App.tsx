import Ajv from 'ajv';
import * as React from 'react';

const ajv = new Ajv();
const schema = {
  type: 'object',
  properties: {}
};

class App extends React.Component {
  validateSchema = () => {
    const data = {};
    const valid = ajv.validate(schema, data);
    if (valid) {
      // tslint:disable: no-console
      console.log('Heey :)');
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome to React</h1>
      </div>
    );
  }
}

export default App;
