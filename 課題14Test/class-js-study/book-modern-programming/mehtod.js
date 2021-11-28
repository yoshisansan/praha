let harry = {
  name: 'Harry',
  salary: 900000,
  mulSalary: (percent) => {
    // アロー関数はthisを使えない
    this.salary *= 1 + percent / 100;
    console.log(this.salary);
  },
  mulSalary2(percent) {
    this.salary *= 1 + percent / 100;
    console.log(this.salary);
  },
};
// harry.mulSalary(10);
harry.mulSalary2(10);
console.log(harry.salary);
