import { useId } from "react";

import { DepartmentCard } from "./components/department/card";
import { AddEmployeeForm } from "./components/employee/form";
import { useDepartmentStorage } from "./components/employee/hooks/useDepartmentStorage";

import { useFetch } from "./components/employee/hooks/useFetch";

import "./App.css";


function App() {
  const { department, setDepartments } = useDepartmentStorage();
    // const { departments, isLoading, error} = useFetch()

  const id = useId();

  const handleNewEmployeeCreation = (employee, departmentName) => {
    const { firstName, lastName, position } = employee;

    const newEmployee = { firstName, lastName, position, id };

    setDepartments((previousDepartments) => {
      return previousDepartments.map((department) => {
        if (department.title === departmentName) {
          return {
            ...department,
            employee: [...department.employee, newEmployee],
          };
        }
        return department;
      });
    });
  };

  return (
    <div className="container">
      <AddEmployeeForm
        onCreateNewEmployee={handleNewEmployeeCreation}
        departments={department}
      />
      <div className="department-container">
        {department.map((i) => (
          <DepartmentCard
            title={i.title}
            description={i.description}
            employees={i.employee}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
