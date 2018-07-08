import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Dynamic from './dynamic';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dynamic />, div);
});
