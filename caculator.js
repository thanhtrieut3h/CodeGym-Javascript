export function add(n1, n2){
    return n1 + n2;
}
export function substract(n1, n2){
    return n1 - n2;
}
export function multiply(a, b){
    return a * b;
}
export function devide(a, b){
    return b === 0 ? null : a / b;
}
export const evenOdd = number => number % 2 === 0;

export const calculate = {
    add,
    substract,
    multiply,
    devide
}

const calculator = {
    add,
    substract,
    multiply,
    devide
}
export default calculator;