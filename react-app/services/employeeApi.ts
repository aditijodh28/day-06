import type { Employee } from "../types/employee";

const API_URL = "http://localhost:3000/employees";

export async function getEmployees(): Promise<Employee[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch employees");
    }

    return response.json();
}

export async function addEmployee(
    employee: Omit<Employee, "id">
): Promise<Employee> {

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    });

    if (!response.ok) {
        throw new Error("Failed to add employee");
    }

    return response.json();
}

export async function deleteEmployee(id: number): Promise<void> {

    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Failed to delete employee");
    }
}