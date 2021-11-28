import { calSumReducer, changeCHFtoUSD, mulUSD, USDplusCHF } from '../functions';

describe('テスト駆動開発１部', () => {
  // '1-1仮実装
  it('通貨を合計するReducer', () => {
    expect(calSumReducer(1, 2)).toBe(3);
  });
  it('CHFをドルへ換算', () => {
    expect(changeCHFtoUSD([100])).toBe(150);
  });
  it('ドルとCHFを足し算', () => {
    expect(USDplusCHF([100], [100])).toBe(250);
  });
  it('ドルの掛け算', () => {
    expect(mulUSD(100)).toBe(200);
  });
});
