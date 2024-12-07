import { calculator } from '../src/calculator';

const TEST_CASES = [
    {
        message: 'Sum for EMPTY string',
        case: '',
        result: 0
    },
    {
        message: 'Sum for a single number-string',
        case: '1',
        result: 1
    },
    {
        message: 'Sum for a single number-string (multiple digit (2))',
        case: '12',
        result: 12
    },
    {
        message: 'Sum for a single number-string (multiple digit (3))',
        case: '123',
        result: 123
    }
];

describe('calculator function', () => {
    TEST_CASES.forEach(t => {
        it(t.message, () => {
          expect(calculator(t.case)).toBe(t.result);
        });
    });
});
