import { MoneyType } from './types/FunctionsTypes';

export const calSumReducer = (sum: number, item: number): number => sum + item;

export const changeCHFtoUSD = (CHF: MoneyType['CHF'][]): number => {
  const rateUSD = 1.5;
  const exchangedToUSD = CHF.reduce(calSumReducer) * rateUSD;

  return exchangedToUSD;
};

export const USDplusCHF = (USD: MoneyType['USD'][], CHF: MoneyType['CHF'][]): number => {
  const CHFtoUSDtotal = changeCHFtoUSD(CHF);
  const USDtotal = USD.reduce(calSumReducer);

  return CHFtoUSDtotal + USDtotal;
};

export const mulUSD = (USD: MoneyType['USD']): number => {
  return USD * 2;
};
