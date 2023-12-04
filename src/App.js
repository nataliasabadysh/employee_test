import "./App.css";
import { DepartmentCard } from "./components/department/card";
import { AddEmployeeForm } from "./components/employee/form";

import data from "./departmentData.json";

function App() {
  return (
    <div>
      <AddEmployeeForm />
      <div className="department-container">
        {data.map((i) => (
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
