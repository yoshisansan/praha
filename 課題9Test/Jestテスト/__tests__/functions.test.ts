import { sumOfArray, asyncSumOfArray, asyncSumOfArraySometimesZero, getFirstNameThrowIfLong } from '../functions';

describe('functionsの４つの関数テスト', () => {
  it('sumOfArrayのテスト', () => {
    expect(sumOfArray([1,1])).toBe(2);
  });

  it('asyncSumOfArrayのテスト', async () => {
    expect(await asyncSumOfArray([1,2,3,4,5])).toBe(15);
    expect(await asyncSumOfArray([0])).toBe(0);
  });

  it('asyncSumOfArraySometimesZeroのテスト', async () => {
    const databaseReturnVoid = {save: () => { return 3 }};
    const databaseReturnError = {save: () => { throw new Error("fail!"); }};
    expect(await asyncSumOfArraySometimesZero([1,2,3,4,5], databaseReturnVoid)).toBe(15);
    expect(await asyncSumOfArraySometimesZero([1,2,3,4,5], databaseReturnError)).toThrow("fail!");
  });

  it('getFirstNameThrowIfLong', async() => {

    const nameApiService = {
      getFirstName: async() => { return "佐藤"; }
    };

    expect(await getFirstNameThrowIfLong(3, nameApiService)).toBe("佐藤");
    expect(await getFirstNameThrowIfLong(1, nameApiService)).toThrow("first_name too long");
  });
});

// functions関数の中でインスタンスの中身に対して依存性の注入をする方法がわからないのでとりあえずクラス単体でテストできるコードを書きました
// describe('インスタンスのテスト', () => {
//   it('utis/DatabaseMockのインスタンステスト', async () => {
//     const getRandomInt = (max: number): number => {
//       return Math.floor(Math.random() * Math.floor(max));
//     };

//     //2以下の依存性をもつ関数
//     const less2Func = (num: number): void => {
//       const res = getRandomInt(num);
//       if(res < 2) throw new Error("fail!");
//       less2Func(num);
//     }

//     //3以上の依存性をもつ関数
//     const than3Func = (num: number): void => {
//       const res = getRandomInt(num);
//       if(res > 2) return void 0;
//       than3Func(num);
//     }

//     const less2 = less2Func(10) as never;
//     const than3 = than3Func(10);

//     const { save } = new DatabaseMock(),
//       saveDBMock = jest.fn(save),
//       than3DI = saveDBMock.mockReturnValue(than3), //３以上の依存性の注入
//       less2DI = saveDBMock.mockRejectedValue(less2); //２以下の依存性の注入

//     expect(await than3DI([0,10])).toBe(void 0);
//     expect(await less2DI([0,10])).rejects.toThrow(Error);
//   });

//   it('nameApiServiceのインスタンステスト', async () => {
//     const less4Name = '田中';
//     const than5Name = '田中佐藤竹中';

//     const nameApiDemo = async(mockName: string) => {
//       const MAX_LENGTH = 4;
//       const firstName = mockName;

//       if (firstName.length > MAX_LENGTH) {
//         throw new Error("firstName is too long!");
//       }

//       return firstName;
//     }

//     const less4NameDI = await nameApiDemo(less4Name);
//     const than5NameDI = await nameApiDemo(than5Name);

//     const { getFirstName } = new NameApiService();
//     const getFirstNameMock = jest.fn(getFirstName);

//     expect(getFirstNameMock()).resolves.toBe(less4Name);
//     expect(getFirstNameMock()).resolves.toBe(than5Name);
//   });
// });