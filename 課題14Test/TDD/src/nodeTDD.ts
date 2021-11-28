const reducedNum = (sum: number, num: number): number => sum + num;

export class NodeMath {
  //四則演算
  static plusNum(nums: number[]) {
    const sum = nums.reduce(reducedNum);
    return sum;
  }
  static minusNum(numA: number, numB: number) {
    const substruction = numA - numB;
    return substruction;
  }
  static divisionNum(numA: number, numB: number) {
    const division = numA / numB;
    return division;
  }
  static multipleNum(numA: number, numB: number) {
    const multiple = numA * numB;
    return multiple;
  }
  //引数チェック
  static checkArg(argNum: number[]) {
    const errorArgLen = 30;
    if (argNum.length > errorArgLen) throw Error('引数30個を超えています');

    return argNum;
  }
  //条件付き四則演算
  static plusNumUntil1000(numArg: number[]) {
    const sum = this.plusNum(numArg);
    if (sum > 1000) return 'too big';

    return sum;
  }
  static minusNumNegative(numA: number, numB: number) {
    const sum = this.minusNum(numA, numB);
    if (sum < 0) return 'negative number';

    return sum;
  }
  static divisionNumTooDivision(numA: number, numB: number) {
    const sum = this.divisionNum(numA, numB);
    if (sum < 1) return 'too division';

    return sum;
  }
  static mutipleNumTooBig(numA: number, numB: number) {
    const sum = this.multipleNum(numA, numB);
    if (sum > 1000) return 'big big number';

    return sum;
  }
}
