class User {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  greet() {
    console.log(`こんにちは！${this.name}です`); //インスタンスのプロパティの値を利用
  }

  introduce() {
    this.greet(); //同じクラスの他のメソッドを利用
    console.log(`${this.address}に住んでいます`);
  }
}

class Bussiness extends User {
  constructor(name, address, job) {
    super(name, address);
    this.job = job; //新しいプロパティを追加
  }
  money() {
    console.log(`${this.name}の貯金は500兆円になります。congrat`);
  }
}

const userInstance = new Bussiness('田中', '東京', 'job');
userInstance.money();
