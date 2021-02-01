var employeeSalaries = {
    employe1: 2000,
    employe4: 3000,
    employe3: 5000
};
var isEmpty = Object.keys(employeeSalaries).length === 0;
var values = Object.values(employeeSalaries);
console.log(isEmpty ? 0 : values.reduce((a,b) => a+b));
