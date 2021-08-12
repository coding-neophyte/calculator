import { add } from './utilis.js';

const test = QUnit.test;
test('3 added to 5 should return 8', (expect) => {
    const expectedResult = 8;
    const actualResult = add(3, 5);

    expect.equal(actualResult, expectedResult);
});
