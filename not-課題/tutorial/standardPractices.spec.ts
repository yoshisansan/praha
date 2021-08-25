// importを使う場合
import { addCalcFun, addCalcAsyncFun, callErrorFun, callErrorAsyncFun } from './standardPractices';
import 'jest';

describe('stub, mock, spyを使ったテスト', () => {
  it('Math.random関数をmockとして取得し、呼び出してみる', () => {
    // function自体を上書いて仮のmock functionを作ってしまう
    const randomMock = jest.fn(Math.random);
    const mathMockFunc = randomMock.mockReturnValue(0.5);
    expect(mathMockFunc()).toBe(0.5);
  });

  it('Math.random関数をspyして、呼び出してみる', () => {
    // functionの結果を上書いてしまう場合はspyOnを使う
    const randomMock = jest.spyOn(Math, 'random');
    randomMock.mockReturnValue(0.7);
    expect(Math.random()).toBe(0.7);
  });
});

describe('エラーの発生を確認するテスト', () => {
  it('通常のエラー', () => {
    expect(callErrorFun).toThrow();
  });

  it('async/await(Promise)の中でのエラー', () => {
    expect(callErrorAsyncFun()).rejects.toThrow();
  });
});

describe('async/awaitを使ったテスト', () => {
  describe('beforeEachでasync/await', () => {
    let result = 0;
    beforeEach(async () => {
      result = await addCalcAsyncFun(8, 22);
    });

    it('8たす22は30をasync/awaitで', () => {
      expect(result).toBe(30);
    });
  });

  describe('itの中でasync/await', () => {
    it('7たす21は28をasync/awaitで', async () => {
      const result = await addCalcAsyncFun(7, 21);
      expect(result).toBe(28);
    });

    it('7たす22は29をexpect reolvesで', () => {
      expect(addCalcAsyncFun(7, 22)).resolves.toBe(29);
    });
  });
});

describe('functionを読み込んで使う', () => {
  it('1たす8は9になる関数で実行します', () => {
    expect(addCalcFun(1, 8)).toBe(9);
  });
});

// requireを使う場合
const standardPractice = require('./standardPractices');
describe('classを読み込んで使う', () => {
  it('9たす23は32になるようなClac Classで実行します', () => {
    const calc = new standardPractice.Calc(9);
    expect(calc.add(23)).toBe(32);
  });
});