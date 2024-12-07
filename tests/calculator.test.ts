import { calculator } from '../src/calculator';

const TEST_CASES = [
    // STEP 1: test cases
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
    // STEP 2: test cases
    {
        message: 'Sum for a N numbers-string',
        case: '1,2,3,4,5',
        result: 15
    },
    {
        message: 'Sum for a N numbers-string',
        case: '1,22,134,424,5',
        result: 586
    },
    // STEP 3: test cases
    {
        message: 'Allow \\n instead of commas',
        case: '1,22\n134,424,5',
        result: 586
    },
    {
        message: 'Allow consecutive \\n instead of commas',
        case: '1,22\n134,\n\n424,5',
        result: 586
    },
    {
        message: 'Allow multiple consecutive \\n instead of commas',
        case: '1,22\n134,424\n\n\n\n\n,5',
        result: 586
    },
    // STEP 4: Allow custom delimiters
    {
        message: '//;\\nAllow \\n instead of commas',
        case: '//;\n1;22;134;424;5',
        result: 586
    },
    {
        message: '// \\nAllow \\n instead of commas',
        case: '// \n1 22 134 424 5',
        result: 586
    },
    // STEP 5: Do NOTE allow negative numbers
    {
        message: 'Do not allow negative numbers',
        case: '-1',
        error: 'Negative numbers not allowed. Found: [-1]'
    },
    {
        message: 'Do not allow negative numbers',
        case: '12,-2',
        error: 'Negative numbers not allowed. Found: [-2]'
    },
    {
        message: 'Do not allow negative numbers',
        case: '-3,-2',
        error: 'Negative numbers not allowed. Found: [-3,-2]'
    },
    {
        message: 'Do not allow negative numbers',
        case: '-2,-3,-5,-2',
        error: 'Negative numbers not allowed. Found: [-2,-3,-5,-2]'
    },
    {
        message: 'Do not allow negative numbers',
        case: '//;\n12;-2',
        error: 'Negative numbers not allowed. Found: [-2]'
    },
    // STEP 6: Do NOT allow number above 1000 to be summed
    {
        message: 'Do NOT allow number above 1000',
        case: '1, 1000',
        result: 1001
    },
    {
        message: 'Do NOT allow number above 1000',
        case: '1,, 2, 1000',
        result: 1003
    },
    {
        message: 'Do NOT allow number above 1000',
        case: '1, 1001',
        result: 1
    },
    {
        message: 'Do NOT allow number above 1000',
        case: '2, 100230,3,4',
        result: 9
    },
    {
        message: 'Do NOT allow number above 1000',
        case: '1, 999',
        result: 1000
    },
    // EDGE CASES: specific to TypeScript or other outliers
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
            if (t.error) {
                expect(() => calculator(t.case)).toThrow(t.error);
            } else {
                expect(calculator(t.case)).toBe(t.result);
            }
        });
    });
});
