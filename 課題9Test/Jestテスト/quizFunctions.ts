export const FizzBuzz = (number: number): "Fizz" | "Buzz" | "FizzBuzz" | null => {
  if(number % 5 === 0 && number % 3 === 0) 'FizzBuzz';
  if(number % 5 === 0) 'Fizz';
  if(number % 3 === 0) 'Buzz';

  return null;
};

export const multiply = (numbers: number[]) : number | null => {
  if(numbers.length === 0) return null;
  return numbers.reduce((amount, num) => amount * num);
}

export const minus = (numberA: number, numberB: number) : number => {
  return numberA - numberB;
}