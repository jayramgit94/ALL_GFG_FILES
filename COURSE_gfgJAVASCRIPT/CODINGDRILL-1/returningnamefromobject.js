const employees = [ 
    { name: 'John', salary: 60000 },
    { name: 'David', salary: 75000 },
    { name: 'Olivia', salary: 80000 },
    { name: 'Jane', salary: 95000 }
];
//filter employees with salary less than 70000
const result = employees.filter(employees => employees.salary < 70000)
const result2 = employees.filter(employees => employees.salary > 70000).map(employee => employee.name);
console.log(result);
console.log(result2);