// Day 03 independent practice.
// You must write the solution yourself before requesting hints.
import { getOpenTickets, countByStatus } from "../../src/ticket-engine.js";

console.log("Day 03 practice workspace is ready.");

const tickets = [
  { id: "T-001", title: "Broken PC", status: "open" },
  { id: "T-002", title: "Damaged chair", status: "resolved" },
  { id: "T-003", title: "WiFi issue", status: "in-progress" },
  { id: "T-004", title: "Printer error", status: "open" },
  { id: "T-005", title: "Broken fan", status: "resolved" },
];

console.log(getOpenTickets(tickets));
console.log(getOpenTickets([]));

console.log(countByStatus(tickets));
console.log(countByStatus([]));
