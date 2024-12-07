import { calculator } from '../src/calculator';

const TEST_CASES = [
    // STEP 1: test cases
    {
        count: 1,
        message: 'Sum for EMPTY string',
        case: '',
        result: 0
    },
    {
        count: 2,
        message: 'Sum for a single number-string',
        case: '1',
        result: 1
    },
    {
        count: 3,
        message: 'Sum for a single number-string (multiple digit (2))',
        case: '12',
        result: 12
    },
    {
        count: 4,
        message: 'Sum for a single number-string (multiple digit (3))',
        case: '123',
        result: 123
    },
    {
        count: 5,
        message: 'Sum for a two numbers-string',
        case: '1,2',
        result: 3
    },
    {
        count: 6,
        message: 'Sum for a two numbers-string (single-digit, multi-digit)',
        case: '1,12',
        result: 13
    },
    {
        count: 7,
        message: 'Sum for a two numbers-string (multi-digit, single-digit)',
        case: '1,23',
        result: 24
    },
    // STEP 2: test cases
    {
        count: 8,
        message: 'Sum for a N numbers-string',
        case: '1,2,3,4,5',
        result: 15
    },
    {
        count: 9,
        message: 'Sum for a N numbers-string',
        case: '1,22,134,424,5',
        result: 586
    },
    // STEP 3: test cases
    {
        count: 10,
        message: 'Allow \\n instead of commas',
        case: '1,22\n134,424,5',
        result: 586
    },
    {
        count: 11,
        message: 'Allow consecutive \\n instead of commas',
        case: '1,22\n134,\n\n424,5',
        result: 586
    },
    {
        count: 12,
        message: 'Allow multiple consecutive \\n instead of commas',
        case: '1,22\n134,424\n\n\n\n\n,5',
        result: 586
    },
    // STEP 4: Allow custom and multiple delimiters
    {
        count: 13,
        message: '//[;]\\nAllow \\n instead of commas',
        case: '//[;]\n1;22;134;424;5',
        result: 586
    },
    {
        count: 14,
        message: '//[ ]\\nAllow \\n instead of commas',
        case: '//[ ]\n1 22 134 424 5',
        result: 586
    },
    {
        count: 15,
        message: '//[%%%%]\\nAllow \\n instead of commas',
        case: '//[%%%%]\n1%%%%22%%%%134%%%%424%%%%5',
        result: 586
    },
    {
        count: 16,
        message: '//[---]\\nAllow \\n instead of commas',
        case: '//[---]\n1---22---134---424---5',
        result: 586
    },
    {
        count: 17,
        message: '//[@@@@][;]\\nAllow \\n instead of commas',
        case: '//[@@@@][;]\n1;22;134;424;5',
        result: 586
    },
    {
        count: 18,
        message: '//[@@@@][;]\\nAllow \\n instead of commas',
        case: '//[@@@@][;]\n1;22@@@@134;424;5',
        result: 586
    },
    {
        count: 19,
        message: '//[@@**][;]\\nAllow \\n instead of commas',
        case: '//[@@**][;]\n1;22@@**134;424;5',
        result: 586
    },
    // STEP 5: Do NOTE allow negative numbers
    {
        count: 20,
        message: 'Do not allow negative numbers',
        case: '-1',
        error: 'Negative numbers not allowed. Found: [-1]'
    },
    {
        count: 21,
        message: 'Do not allow negative numbers',
        case: '12,-2',
        error: 'Negative numbers not allowed. Found: [-2]'
    },
    {
        count: 22,
        message: 'Do not allow negative numbers',
        case: '-3,-2',
        error: 'Negative numbers not allowed. Found: [-3,-2]'
    },
    {
        count: 23,
        message: 'Do not allow negative numbers',
        case: '-2,-3,-5,-2',
        error: 'Negative numbers not allowed. Found: [-2,-3,-5,-2]'
    },
    {
        count: 24,
        message: 'Do not allow negative numbers',
        case: '//[;]\n12;-2',
        error: 'Negative numbers not allowed. Found: [-2]'
    },
    // STEP 6: Do NOT allow number above 1000 to be summed
    {
        count: 25,
        message: 'Do NOT allow number above 1000',
        case: '1, 1000',
        result: 1001
    },
    {
        count: 26,
        message: 'Do NOT allow number above 1000',
        case: '1,, 2, 1000',
        result: 1003
    },
    {
        count: 27,
        message: 'Do NOT allow number above 1000',
        case: '1, 1001',
        result: 1
    },
    {
        count: 28,
        message: 'Do NOT allow number above 1000',
        case: '2, 100230,3,4',
        result: 9
    },
    {
        count: 29,
        message: 'Do NOT allow number above 1000',
        case: '1, 999',
        result: 1000
    },
    // EDGE CASES: specific to TypeScript or other outliers
    {
        count: 30,
        message: 'Sum for a two numbers-string (multi-digit, multi-digit)',
        case: '12,23',
        result: 35
    },
    {
        count: 31,
        message: '[EDGE CASE] non numeric values in string',
        case: 'sdf',
        result: 0
    },
    {
        count: 32,
        message: '[EDGE CASE] non numeric values in string. Should only consider numbers for summation',
        case: '1,sdf',
        result: 1
    },
    {
        count: 33,
        message: '[EDGE CASE] non numeric(spaces) values in string. Should only consider numbers for summation',
        case: '15, 2',
        result: 17
    },
];

describe('calculator function', () => {
    TEST_CASES.forEach(t => {
        it(t.count + ': ' + t.message, () => {
            if (t.error) {
                expect(() => calculator(t.case)).toThrow(t.error);
            } else {
                expect(calculator(t.case)).toBe(t.result);
            }
        });
    });
});
