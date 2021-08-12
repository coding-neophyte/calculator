// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { add } from './utilis.js';

const test = QUnit.test;
test('3 added to 5 should return 8', (expect) => {
    const expectedResult = 8;
    const actualResult = add(3, 5);

    expect.equal(actualResult, expectedResult);
});

import { divideNumber, subtractNumber } from '../utilis.js';

const test1 = QUnit.test;
test1('10 divided by 2 should return 5', (expect) => {
    const expectedResult = 5;
    const actualResult = divideNumber(10, 2);
    expect.equal(actualResult, expectedResult);
});

const test2 = QUnit.test;
test2('20 minus 17 should return 3', (expect) => {
    const expectedResult = 3;
    const actualResult = subtractNumber(20, 17);
    expect.equal(actualResult, expectedResult);
});

import { multiplyNumber } from '../utilis.js';

const test3 = QUnit.test;
test3('5 multiplied by 5 should return 25', (expect) => {
    const expectedResult = 25;
    const actualResult = multiplyNumber(5, 5);
    expect.equal(actualResult, expectedResult);
});
