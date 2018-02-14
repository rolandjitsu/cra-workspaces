import {foo} from './foo';

test('foo()', () => {
    it('should return Foo', () => {
        expect(foo()).toBe('Foo');
    });
});