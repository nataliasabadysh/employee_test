export const api = {
  getEmployees: () => {
    return fetch("http://localhost:8000/employees").then((response) => {
      return response.json();
    });
  },
  getEmployee: (id) => {
    return fetch(`http://localhost:8000/employees/${id}`).then((response) => {
      return response.json();
    });
  },
  getDepartments: () => {
    return fetch("http://localhost:8000/department").then((response) => {
      return response.json();
    });
  },
};
