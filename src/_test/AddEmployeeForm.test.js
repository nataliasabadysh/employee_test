import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { AddEmployeeForm } from "../components/employee/form/index";

test("renders AddEmployeeForm with required inputs and submit button", () => {
  render(<AddEmployeeForm />);

  expect(screen.getByPlaceholderText("First name*")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Last name*")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Position*")).toBeInTheDocument();

  fireEvent.submit(screen.getByRole("button", { name: /add/i }));
});

test("Not allow form submission with non-empty fields", () => {
  const mockSubmit = jest.fn();
  render(<AddEmployeeForm onSubmit={mockSubmit} />);

  fireEvent.change(screen.getByPlaceholderText("First name*"), {
    target: { value: "" },
  });
  fireEvent.change(screen.getByPlaceholderText("Last name*"), {
    target: { value: "" },
  });
  fireEvent.change(screen.getByPlaceholderText("Position*"), {
    target: { value: "" },
  });

  // Assuming your submit button is an input of type submit
  const submitButton = screen.getByDisplayValue(/add/i);
  fireEvent.click(submitButton);

  expect(mockSubmit).not.toHaveBeenCalled();
});
