import { useEffect } from "react";
import { useState } from "react";

import data from "../../../data.json";
import * as storage from "../../../storage";

export const useDepartmentStorage = () => {
  const [department, setDepartments] = useState(data);

  useEffect(() => {
    const parsedDepartmet = storage.get("department");

    if (!parsedDepartmet) {
      return;
    }
    setDepartments(parsedDepartmet);
  }, []);

  useEffect(() => {
    storage.save("department", department);
  }, [department]);

  useEffect(() => {}, []);

  return {
    department,
    setDepartments,
  };
};
