// Day 04 independent practice.
// You must write the solution yourself before requesting hints.
import { createTicket } from "../../src/ticket-engine.js";
console.log("Day 04 practice workspace is ready.");

const employee = {
  name: "Nimal",
  department: "IT",
};

const employeeProfile = {
  ...employee,
  id: "E-001",
  role: "Technician",
};

function validatePriority(priority) {
  const priorityList = ["low", "medium", "high"];
  for (const element of priorityList) {
    if (element === priority) {
      return true;
    }
  }
  return false;
}

// console.log(validatePriority("high"));
// console.log(validatePriority("urgent"));
// console.log(validatePriority(null));

const input = {
  title: "  Fix printer  ",
  category: "it",
  priority: "high",
};

const ticket = createTicket(input, "T-99", "2026-11-12T10:00:00.000Z");

console.log(ticket);
console.log(input);

const invalidInputs = [
  { title: "  ", category: "it", priority: "high" },
  { title: "Fix printer", category: "finance", priority: "high" },
  { title: "Fix printer", category: "it", priority: "urgent" },
];

for (const invalidInput of invalidInputs) {
  try {
    createTicket(invalidInput, "T-100", "2026-11-12T10:00:00.000Z");

    console.log("ERROR: Invalid input was accepted");
  } catch (error) {
    console.log("Rejected:", error.message);
  }
}