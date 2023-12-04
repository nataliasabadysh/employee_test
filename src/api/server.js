const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const departments = [
  {
    id: "b901be80-e370-4394-949f-bcc878d22944",
    title: "Onboarding",
    description:
      "Handles the integration of new employees into the company, ensuring a smooth transition and providing necessary resources and training.",
    employees: [1, 2, 3],
  },
  {
    id: "b901be80-e370-4394-949f-bcc878d233å944",
    title: "HR",
    description:
      "Handles the integration of new employees into the company, ensuring a smooth transition and providing necessary resources and training.",
    employees: [1],
  },
];

const employees = [
  { id: 1, firstName: "John", lastName: "Doe", position: "Web Developer" },
  { id: 2, firstName: "Brad", lastName: "Doe", position: "HR" },
  { id: 3, firstName: "Chris", lastName: "Doe", position: "Marketing" },
];

app.get("/department", (req, res) => {
  res.json(departments);
});

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get("/employees/:id", (req, res) => {
  const employee = employees.find((emp) => emp.id === parseInt(req.params.id));
  if (!employee) {
    return res.status(404).send("Employee not found");
  }
  res.json(employee);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
