import { sum } from '../common/util'

test('sum numbers', () => {
    let a = 1,b = 2;
    let result = sum(a,b)
    expect(result).toBe(3)
});