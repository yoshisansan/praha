function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype.raiseSlary = function (percent) {
  this.salary *= 1 + percent / 100;
  console.log(this.salary);
};

const tes = new Employee('田中', 90000);
console.log(tes.raiseSlary(100));
