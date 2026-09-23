import { useState } from "react";
import type { Employee } from "../types/employee";

interface EmployeeFormProps {
    onAdd: (employee: Employee) => void;
}

function EmployeeForm({ onAdd }: EmployeeFormProps) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("IT");
    const [salary, setSalary] = useState("");
    const [age, setAge] = useState("");

    function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {

        e.preventDefault();

        if (
            !name ||
            !email ||
            !salary ||
            !age
        ) {
            alert("Please fill all fields");
            return;
        }

        const employee: Employee = {
            id: Date.now(),
            name,
            email,
            department,
            salary: Number(salary),
            age: Number(age)
        };

        onAdd(employee);

        setName("");
        setEmail("");
        setSalary("");
        setAge("");
    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                placeholder="Name"
                value={name}
                onChange={e =>
                    setName(e.target.value)
                }
            />

            <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={e =>
                    setEmail(e.target.value)
                }
            />

            <select
                value={department}
                onChange={e =>
                    setDepartment(e.target.value)
                }
            >
                <option>IT</option>
                <option>HR</option>
                <option>Finance</option>
                <option>Marketing</option>
            </select>

            <input
                placeholder="Salary"
                type="number"
                value={salary}
                onChange={e =>
                    setSalary(e.target.value)
                }
            />

            <input
                placeholder="Age"
                type="number"
                value={age}
                onChange={e =>
                    setAge(e.target.value)
                }
            />

            <button type="submit">
                Add Employee
            </button>

        </form>
    );
}

export default EmployeeForm;