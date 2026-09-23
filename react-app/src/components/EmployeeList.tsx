import type { Employee } from "../types/employee";
import EmployeeCard from "./EmployeeCard";

interface EmployeeListProps {
    employees: Employee[];
    onDelete: (id: number) => void;
    onEdit: (employee: Employee) => void;
}

function EmployeeList({
    employees,
    onDelete,
    onEdit
}: EmployeeListProps) {

    if (employees.length === 0) {
        return (
            <p>
                No employees found.
            </p>
        );
    }

    return (
        <div className="employee-list">

            {employees.map(employee => (
                <EmployeeCard
                    key={employee.id}
                    employee={employee}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}

        </div>
    );
}

export default EmployeeList;