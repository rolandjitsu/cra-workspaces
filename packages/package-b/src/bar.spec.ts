import {bar} from './bar';

test('bar()', () => {
    it('should return bar', () => {
        expect(bar()).toBe('Boo');
    });
});