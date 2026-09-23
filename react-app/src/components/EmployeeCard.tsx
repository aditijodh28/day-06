import type { Employee } from "../types/employee";

interface EmployeeCardProps {
    employee: Employee;
    onDelete: (id: number) => void;
    onEdit: (employee: Employee) => void;
}

function EmployeeCard({
    employee,
    onDelete,
    onEdit
}: EmployeeCardProps) {

    return (
        <div className="employee-card">

            <h3>{employee.name}</h3>

            <p>
                <strong>Email:</strong>{" "}
                {employee.email}
            </p>

            <p>
                <strong>Department:</strong>{" "}
                {employee.department}
            </p>

            <p>
                <strong>Salary:</strong>{" "}
                ₹{employee.salary}
            </p>

            <p>
                <strong>Age:</strong>{" "}
                {employee.age}
            </p>

            <div className="card-buttons">

                <button
                    onClick={() => onEdit(employee)}
                >
                    Edit
                </button>

                <button
                    onClick={() => onDelete(employee.id)}
                >
                    Delete
                </button>

            </div>

        </div>
    );
}

export default EmployeeCard;