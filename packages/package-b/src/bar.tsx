import React from 'react';
import {foo} from 'package-a';

export function bar() {
    const res = foo();
    console.log(res);
    return 'Bar';
}

export function fooBar() {
    return (
        <span></span>
    );
}