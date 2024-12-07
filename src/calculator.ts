"use strict";

export function calculator(equation: string): number {
    let delimiterRegex;
    const negativeNumbers: number[] = [];
    let sum = 0;
    if (!equation.length) return sum;
    const defaultDelimiter = ',';

    // custom delimiters
    let delimiters = getDelimiters(equation);
    if (delimiters) {
        try {
            const specialCharacters = /[.*+?^=!:${}()|\[\]\/\\]/g;
            delimiters = delimiters.map(item => item.replace(specialCharacters, '\\$&'));
            delimiterRegex = new RegExp(delimiters.join('|'), 'g');
            equation = equation.replace(delimiterRegex, defaultDelimiter)    
        } catch (e) {}
    }

    // handling the '\n' in the equation string
    // replacing '\n' with ',' so that it is used as a delimiter
    equation = equation.replace('\n', defaultDelimiter)

    // assuming the ',' delimiter for now
    const parsed_equation = equation.split(defaultDelimiter);

    // validating the parsed_equation
    // Making sure we have only numeric values in the parsed_equation array
    parsed_equation.forEach(num => {
        // removing the possible whitespaces from front and end of the string
        num = num.trim();
        // using the + unary operator to convert possible string into numbers
        if (!isNaN(+num) && (+num <= 1000)) {
            //handling negative numbers
            if (+num < 0) {
                negativeNumbers.push(+num);
            }
            sum += +num;
        }
        // returning 0 in case not a valid number
        return 0;
    });
    

    if (negativeNumbers.length) {
        throw new Error(`Negative numbers not allowed. Found: [${negativeNumbers.join(',')}]`);
    }

    return sum;
}


function getDelimiters(equation: string): string[] | null {
    // match the delimiters pattern: //[*][%][delim3]
    const delimiterPattern = /\[([^\]]+)\]/g;
    
    // match all the delimiters inside square brackets
    const match = equation.match(delimiterPattern);
  
    if (match) {
        return match.map(item => item.replace(/[\[\]]/g, ''));
    }
  
    return null;
  }
  
  