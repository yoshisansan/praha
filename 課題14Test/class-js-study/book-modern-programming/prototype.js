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

const employeePrototype = {
  raiseSalary: function (percent) {
    this.salary *= 1 + percent / 100;
    result, employeePrototype;
    console.log(this.salary);
    return result;
  },
};

function createEmployee(name, salary) {
  const result = { name, salary };
  Object.setPrototypeOf(result, employeePrototype);
  return result;
}
createEmployee('田中', 900000);
harry.raiseSalary(10);
