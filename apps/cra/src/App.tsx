import React, {Component} from 'react';
import Loadable from 'react-loadable';

const DynamicComponent = Loadable({
  loader: () => import('./dynamic'),
  loading: () => <span>Loading ...</span>
});

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Root</h2>
        <DynamicComponent />
      </div>
    );
  }
}
