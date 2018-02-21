import {foo} from './foo';

describe('foo()', () => {
    it('should return Foo', () => {
        expect(foo()).toBe('Foo');
    });
});