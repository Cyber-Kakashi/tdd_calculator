export function calculator(equation: string): number {
    const delimiterRegex = /^\/\/([^\\n]+)\n/;
    const negativeNumbers: number[] = [];
    let sum = 0;
    if (!equation.length) return sum;
    let delimiter = ',';

    // supporting custom delimiters
    const match = equation.match(delimiterRegex);
    if (match) {
        delimiter = match[1];
    }

    // handling the '\n' in the equation string
    // replacing '\n' with ',' so that it is used as a delimiter
    equation = equation.replace('\n', delimiter)

    // assuming the ',' delimiter for now
    const parsed_equation = equation.split(delimiter);

    // validating the parsed_equation
    // Making sure we have only numeric values in the parsed_equation array
    const validated_equation_array: number[] = parsed_equation.map(num => {
        // removing the possible whitespaces from front and end of the string
        num = num.trim();
        // using the + unary operator to convert possible string into numbers
        if (!isNaN(+num)) {
            //handling negative numbers
            if (+num < 0) {
                negativeNumbers.push(+num);
            }
            return +num;
        }
        // returning 0 in case not a valid number
        return 0;
    });
    

    if (negativeNumbers.length) {
        throw new Error(`Negative numbers not allowed. Found: [${negativeNumbers.join(',')}]`);
    }

    validated_equation_array.forEach(num => {
        sum += num;
    })

    return sum;
}