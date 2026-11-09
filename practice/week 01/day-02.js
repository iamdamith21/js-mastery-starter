// Day 02 independent practice.
// You must write the solution yourself before requesting hints.

console.log("Day 02 practice workspace is ready.");

import { validateTitle } from "../../src/ticket-engine.js";

console.log(validateTitle("Broken projector"));
console.log(validateTitle("ab"));
console.log(validateTitle(" "));
console.log(validateTitle(null));
console.log(validateTitle("x".repeat(101)));

function canSubmitTicket(title, category) {
  const allowedCategories = ["it", "facilities", "other"];

  return validateTitle(title) && allowedCategories.includes(category);
}

console.log(canSubmitTicket("Broken PC", "it"));
console.log(canSubmitTicket("ab", "facilities"));
console.log(canSubmitTicket("Printer", "finance"));
console.log(canSubmitTicket("WiFi issue", "other"));
