import { NodeMath } from '../src/nodeTDD';

describe('課題TDDでコードを書いてみる', () => {
  // リファクタリングとして、重複しているテストを消す（課題用にコメントアウト）
  // describe('四則演算', () => {
  //   it('足し算', () => {
  //     const sum = NodeMath.plusNum([1, 1]);
  //     expect(sum).toBe(2);
  //   });
  //   it('引き算', () => {
  //     const substructionSum = NodeMath.minusNum(2, 1);
  //     expect(substructionSum).toBe(1);
  //   });
  //   it('割り算', () => {
  //     const divisionRes = NodeMath.divisionNum(2, 1);
  //     expect(divisionRes).toBe(2);
  //   });
  //   it('掛け算', () => {
  //     const multipleRes = NodeMath.multipleNum(2, 2);
  //     expect(multipleRes).toBe(4);
  //   });
  // });
  describe('条件付き四則演算', () => {
    describe('足し算でかつ結果が1000を超える場合は「too big」と文字列が返る', () => {
      it('足し算する', () => {
        const arg = NodeMath.checkArg([1, 2, 1]);
        const sum = NodeMath.plusNumUntil1000(arg);
        expect(sum).toBe(4);
      });
      it('1000を超える場合は「too big」と文字列が返る', () => {
        expect(NodeMath.plusNumUntil1000([100, 1000])).toBe('too big');
      });
    });
    describe('引き算でかつ計算結果がマイナスの場合は「negative number」と文字列が返る', () => {
      it('引き算する', () => {
        const sum = NodeMath.minusNumNegative(10, 1);
        expect(sum).toBe(9);
      });
      it('計算結果がマイナスの場合は「negative number」と文字列が返る', () => {
        expect(NodeMath.minusNumNegative(100, 1000)).toBe('negative number');
      });
    });
    describe('割り算の場合、計算結果が小数以下になる場合は「too division」と文字列が返ってくる', () => {
      it('割り算する', () => {
        const sum = NodeMath.divisionNumTooDivision(10, 2);
        expect(sum).toBe(5);
      });
      it('小数以下になる場合は「too division」と文字列が返る', () => {
        expect(NodeMath.divisionNumTooDivision(2, 3)).toBe('too division');
      });
    });
    describe('かけ算の場合、計算結果が1000を越える場合は「big big number」と文字列が返る', () => {
      it('掛け算する', () => {
        const sum = NodeMath.mutipleNumTooBig(10, 2);
        expect(sum).toBe(20);
      });
      it('計算結果が1000を越える場合は「big big number」と文字列が返る', () => {
        expect(NodeMath.mutipleNumTooBig(100, 100)).toBe('big big number');
      });
    });
  });
  describe('引数チェックの処理', () => {
    it('引数30個までを受け取ったテスト', () => {
      expect(30 >= NodeMath.checkArg([1, 2, 1, 2]).length).toEqual(true);
    });
    describe('例外処理', () => {
      it('引数30個を超えて取るとエラーになるテスト', () => {
        const argArr = Array(31).fill(null);
        const randomNumArg = argArr.map((_) => Math.floor(Math.random() * 10));
        expect(() => NodeMath.checkArg(randomNumArg)).toThrow('引数30個を超えています');
      });
    });
  });
});
