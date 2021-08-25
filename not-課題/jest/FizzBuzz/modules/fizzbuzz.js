module.exports = (n) => {
  if(outOfRange(n)) throw new RangeError('引数が不正です。1以上の整数のみ引数に指定可能です。');
  if(isFizzBuzz(n)) return 'FizzBuzz';
  if(isFizz(n)) return 'Fizz';
  if(isBuzz(n)) return 'Buzz';

  return n;
};

const outOfRange = n => {
  if (!(typeof n === 'number')) return true;
  if (Math.round(n) != n) return true;
  if (n < 1) return true;

  return false;
};

const isFizz = (n) => {
  return n % 3 === 0;
}

const isBuzz = (n) => {
  return n % 5 === 0;
}

const isFizzBuzz = (n) => {
  return isFizz(n) && isBuzz(n);
}