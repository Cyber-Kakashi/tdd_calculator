export function calculator(equation: string): number {
    let sum = 0;
    if (!equation.length) return sum;

    // handling the '\n' in the equation string
    // replacing '\n' with ',' so that it is used as a delimiter
    equation = equation.replace('\n', ',')

    // assuming the ',' delimiter for now
    const parsed_equation = equation.split(',');

    // validating the parsed_equation
    // Making sure we have only numeric values in the parsed_equation array
    const validated_equation_array: number[] = parsed_equation.map(num => {
        // removing the possible whitespaces from front and end of the string
        num = num.trim()
        // using the + unary operator to convert possible string into numbers
        if (!isNaN(+num)) return +num;
        // returning 0 in case not a valid number
        return 0;
    });

    validated_equation_array.forEach(num => {
        sum += num;
    })

    return sum;
}