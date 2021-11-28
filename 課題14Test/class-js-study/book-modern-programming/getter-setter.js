class Person {
  constructor(last, first) {
    this.last = last;
    this.first = first;
  }
  get fullName() {
    return `${this.last}, ${this.first}`;
  }

  set fullNameSetter(value) {
    const parts = value.split(/,\s*/);
    this.last = parts[0];
    this.first = parts[1];
  }
}

const harry = new Person('エアロ', 'スミス');
harry.fullNameSetter = '慎吾, しご';
console.log(harry.fullName);
