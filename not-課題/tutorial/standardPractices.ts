// functionをexportして使用する場合
export function addCalcFun(baseValue: number, addValue: number): number {
  return baseValue + addValue;
}

export function callErrorFun(): void {
  throw new Error('error');
}

export async function callErrorAsyncFun(): Promise<void> {
  throw new Error('asyncError');
}

// classをexportして使用する場合
export class Calc {
  private baseValue: number;

  constructor(baseValue: number) {
    this.baseValue = baseValue;
  }

  add(addValue): number {
    return this.baseValue + addValue;
  }
}

export async function addCalcAsyncFun(baseValue: number, addValue: number): Promise<number> {
  return baseValue + addValue;
}