export function calculator(equation: string): number {
    let sum = 0;
    if (!equation.length) return sum;

    // assuming the ',' delimiter for now
    const parsed_equation = equation.split(',');
    console.log(parsed_equation)

    if (parsed_equation.length == 1) {
        sum += +parsed_equation[0];
    } else if (parsed_equation.length == 2) {
        sum += +parsed_equation[0] + +parsed_equation[1];
    }

    return sum;
}