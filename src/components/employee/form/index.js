export const AddEmployeeForm = ({ employee }) => {
  // const {firstName, lastName, position } = employee;

  return (
    <div className="add-employee_form">
      <form>
        <input name="firstName" placeholder="First name*" required />
        <input name="lastName" placeholder="Last name*" required />
        <input name="position" placeholder="Position*" required />

        <input type="submit" value="Add" />
      </form>
    </div>
  );
};
