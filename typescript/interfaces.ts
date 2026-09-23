interface Employee {
    id: number;
    name: string;
    email: string;
    department: string;
    salary: number;
    age?: number;
}

const employee1: Employee = {
    id: 1,
    name: "Priya",
    email: "priya@example.com",
    department: "IT",
    salary: 50000
};

console.log(employee1);