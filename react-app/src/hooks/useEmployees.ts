import { useEffect, useState } from "react";
import type { Employee } from "../types/employee";
import { getEmployees } from "../services/employeeApi";

export function useEmployees() {

    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {

        async function loadEmployees() {

            try {
                setLoading(true);

                const data = await getEmployees();

                setEmployees(data);

            } catch (error) {

                setError("Unable to load employees");

            } finally {

                setLoading(false);
            }
        }

        loadEmployees();

    }, []);

    return {
        employees,
        setEmployees,
        loading,
        error
    };
}