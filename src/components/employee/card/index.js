export const EmployeeCard = ({ employee }) => {
  const { firstName, lastName, position } = employee;

  return (
    <div className="employee_card">
      <h4 className="employee_fullname">
        {firstName} {lastName}{" "}
      </h4>
      <div className="employee_position">{position}</div>
    </div>
  );
};
