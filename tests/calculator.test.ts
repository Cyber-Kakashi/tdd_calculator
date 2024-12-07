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
    },
    {
        message: 'Sum for a two numbers-string',
        case: '1,2',
        result: 3
    },
    {
        message: 'Sum for a two numbers-string (single-digit, multi-digit)',
        case: '1,12',
        result: 13
    },
    {
        message: 'Sum for a two numbers-string (multi-digit, single-digit)',
        case: '1,23',
        result: 24
    },
    {
        message: 'Sum for a two numbers-string (multi-digit, multi-digit)',
        case: '12,23',
        result: 35
    },
    {
        message: '[EDGE CASE] non numeric values in string',
        case: 'sdf',
        result: 0
    },
    {
        message: '[EDGE CASE] non numeric values in string. Should only consider numbers for summation',
        case: '1,sdf',
        result: 1
    },
    {
        message: '[EDGE CASE] non numeric(spaces) values in string. Should only consider numbers for summation',
        case: '15, 2',
        result: 17
    },
];

describe('calculator function', () => {
    TEST_CASES.forEach(t => {
        it(t.message, () => {
          expect(calculator(t.case)).toBe(t.result);
        });
    });
});
