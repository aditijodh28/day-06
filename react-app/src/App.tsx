import { useMemo, useState } from "react";
import Dashboard from "./components/Dashboard";
import EmployeeList from "./components/EmployeeList";
import { useEmployees } from "./hooks/useEmployees";
import EmployeeForm from "./components/EmployeeForm";

function App() {

    const {
        employees,
        setEmployees,
        loading,
        error
    } = useEmployees();

    const [search, setSearch] = useState("");
    const [department, setDepartment] = useState("All");
    const [sortOrder, setSortOrder] = useState("none");

    const filteredEmployees = useMemo(() => {

        let result = employees.filter(employee =>
            employee.name
                .toLowerCase()
                .includes(search.toLowerCase())
        );

        if (department !== "All") {
            result = result.filter(
                employee =>
                    employee.department === department
            );
        }

        if (sortOrder === "salaryAsc") {
            result.sort(
                (a, b) => a.salary - b.salary
            );
        }

        if (sortOrder === "salaryDesc") {
            result.sort(
                (a, b) => b.salary - a.salary
            );
        }

        return result;

    }, [employees, search, department, sortOrder]);

    function handleDelete(id: number) {

        setEmployees(
            employees.filter(
                employee => employee.id !== id
            )
        );
    }

    if (loading) {
        return <h2>Loading employees...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <div>

            <h1>Employee Management Dashboard</h1>

            <Dashboard employees={employees} />

            <div className="controls">

                <input
                    type="text"
                    placeholder="Search employee..."
                    value={search}
                    onChange={e =>
                        setSearch(e.target.value)
                    }
                />

                <select
                    value={department}
                    onChange={e =>
                        setDepartment(e.target.value)
                    }
                >
                    <option value="All">All Departments</option>
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                    <option value="Marketing">
                        Marketing
                    </option>
                </select>

                <select
                    value={sortOrder}
                    onChange={e =>
                        setSortOrder(e.target.value)
                    }
                >
                    <option value="none">Sort By</option>
                    <option value="salaryAsc">
                        Salary Low → High
                    </option>
                    <option value="salaryDesc">
                        Salary High → Low
                    </option>
                </select>

            </div>

            <EmployeeList
                employees={filteredEmployees}
                onDelete={handleDelete}
            />

            <EmployeeForm
    onAdd={(employee) => {
        setEmployees([
            ...employees,
            employee
        ]);
    }}
/>

        </div>
    );
}

export default App;