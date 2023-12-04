import { useForm } from "../hooks/useForm";
import { useState } from "react";

export const AddEmployeeForm = ({ onCreateNewEmployee, departments }) => {
  const { values, handleChange, reset } = useForm({
    firstName: "",
    lastName: "",
    position: "",
  });

  const [department, setDepartment] = useState(departments[0].title);

  const save = (event) => {
    event.preventDefault();
    onCreateNewEmployee(values, department);
    reset();
  };

  const isValid = values.firstName && values.lastName && values.position;

  return (
    <div className="add-employee_form">
      <form onSubmit={save}>
        <label htmlFor="department">Select Department</label>
        <select
          name="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          {departments.map((dept, index) => (
            <option key={index} value={dept.title}>
              {dept.title}
            </option>
          ))}
        </select>

        <label htmlFor="firstName">First Name*</label>
        <input
          name="firstName"
          placeholder="First name*"
          required
          value={values.firstName}
          onChange={handleChange}
        />

        <label htmlFor="lastName">Last Name*</label>
        <input
          name="lastName"
          placeholder="Last name*"
          required
          value={values.lastName}
          onChange={handleChange}
        />

        <label htmlFor="position">Position*</label>
        <input
          name="position"
          placeholder="Position*"
          required
          value={values.position}
          onChange={handleChange}
        />

        <input type="submit" value="Add" disabled={!isValid} />
      </form>
    </div>
  );
};
