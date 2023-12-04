import { useEffect } from "react";
import { api } from "../../../api/client";
import { useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [departments, setDepartments] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    api
      .getDepartments()
      .then((response) => setDepartments(response))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    const fetchDepartmentEmployees = async () => {

      try {
        setIsLoading(true);
        let updatedDepartments = [];

        for (const department of departments) {
            
          if (department.employees && department.employees.length > 0) {
            const employeePromises = department.employees.map((employeeId) =>
              api.getEmployee(employeeId),
            );

            const employees = await Promise.all(employeePromises);

            updatedDepartments.push({ ...department, employees: employees });
          } else {
            updatedDepartments.push(department);
          }
        }
        setData(updatedDepartments);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDepartmentEmployees();
  }, [departments]);

  return { departments: data, isLoading, error };
};
