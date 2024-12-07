export function calculator(equation: string): number {
    let sum = 0;
    if (!equation.length) return sum;

    sum += +equation;
    return sum;
}