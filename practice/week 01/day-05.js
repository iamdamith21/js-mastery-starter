// Day 05 independent practice.
// You must write the solution yourself before requesting hints.
import { updateTicketStatus, removeTicket } from "../../src/ticket-engine.js";

console.log("Day 05 practice workspace is ready.");

const students = [
  { id: 1, name: "kamal", year: 1 },
  { id: 2, name: "Nimal", year: 2 },
  { id: 3, name: "Amal", year: 1 },
];

const updatedStudents = students.map((student) => {
  if (student.name === "Nimal") {
    return { ...student, year: 3 };
  }
  return student;
});

console.log("Original:", students);
console.log("Updated:", updatedStudents);

const tickets = [
  { id: "T-001", status: "open" },
  { id: "T-002", status: "in-progress" },
  { id: "T-003", status: "resolved" },
];

const updated = updateTicketStatus(tickets, "T-001", "resolved");

console.log(updated);
console.log(tickets);
console.log(updated !== tickets);
console.log(updated[0] !== tickets[0]);

const remaining = removeTicket(tickets, "T-002");

console.log(remaining);
console.log(tickets.length);

console.assert(tickets[0].status === "open", "Original ticket was mutated");

console.assert(updated !== tickets, "Expected a new array");

console.assert(
  updated[0] !== tickets[0],
  "Expected a new updated ticket object",
);

console.assert(remaining.length === 2, "Expected two remaining tickets");