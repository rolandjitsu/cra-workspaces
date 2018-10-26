// Setup Enzyme
// http://airbnb.io/enzyme/#upgrading-from-enzyme-2x-or-react--16
// http://airbnb.io/enzyme/docs/installation/react-16.html#working-with-react-16
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
    adapter: new Adapter()
});
