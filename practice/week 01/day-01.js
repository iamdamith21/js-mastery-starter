// Day 01 independent practice.
// You must write the solution yourself before requesting hints.

console.log("Day 01 practice workspace is ready.");

const studentName = "Student A";
let completedLessons = 0;
const isLearning = true;

console.log(studentName);
console.log(completedLessons);
console.log(isLearning);

// Challenge A
function calculateTotal(price, quantity) {
  return price * quantity;
}

console.log(calculateTotal(250, 3));

// Challenge B
function isUrgent(priority) {
  if (priority === "high") {
    return true;
  } else {
    return false;
  }
}

console.log(isUrgent("high"));

// Challenge C
function formatTicket(title, status) {
  return `${title} [${status}]`;
}

console.log(formatTicket("Broken light", "open"));
