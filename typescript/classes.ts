class Employee {
    constructor(
        public id: number,
        public name: string,
        public salary: number
    ) {}

    getDetails(): string {
        return `${this.id} - ${this.name} - ₹${this.salary}`;
    }
}

const employee = new Employee(
    1,
    "Priya",
    50000
);

console.log(employee.getDetails());