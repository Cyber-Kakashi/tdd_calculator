export function calculator(equation: string): number {
    let sum = 0;
    if (!equation.length) return sum;

    // assuming the ',' delimiter for now
    const parsed_equation = equation.split(',');

    // validating the parsed_equation
    // Making sure we have only numeric values in the parsed_equation array
    const validated_equation_array = parsed_equation.map(num => {
        // removing the possible whitespaces from front and end of the string
        num = num.trim()
        // using the + unary operator to convert possible string into numbers
        if (!isNaN(+num)) return +num;
        // just returning 0 to avoid errors for now, this will be refactored later
        return 0;
    });

    if (validated_equation_array.length)

    if (validated_equation_array.length == 1) {
        sum += validated_equation_array[0];
    } else if (validated_equation_array.length == 2) {
        sum += validated_equation_array[0] + validated_equation_array[1];
    }

    return sum;
}