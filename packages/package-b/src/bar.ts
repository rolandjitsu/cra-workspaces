import {foo} from 'package-a';

export function bar() {
    const res = foo();
    console.log(res);
    return 'Bar';
}
