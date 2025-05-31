const employees = [
    {id: 1, name: 'John Doe', department: 'Engineering', salary: 50000},
    {id: 2, name: 'Jane Smith', department: 'Marketing', salary: 45000},
    {id: 3, name: 'Mike Johnson', department: 'Engineering', salary: 55000},
    {id: 4, name: 'Emily Davis', department: 'Marketing', salary: 48000},
    {id: 5, name: 'James Wilson', department: 'Engineering', salary: 51000}
];

const result = employees.reduce((acc, cur) => acc + cur.salary, 0);
const average = result / employees.length;
console.log(average); // 49500