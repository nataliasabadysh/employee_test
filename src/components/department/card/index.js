import { EmployeeCard } from "../../employee/card";

export const DepartmentCard = ({ title, description, employees }) => {
  return (
    <div className="department">
      <h3 className="department_title">{title}</h3>
      <p className="department_description">{description}</p>

      <div className="department_employee">
        <ul>
          {employees?.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </ul>
      </div>
    </div>
  );
};
