import React from 'react';
import {mount} from 'enzyme';
import App from './App';

it('renders without crashing', () => {
    const app = mount(<App />);
    app.unmount();
});
