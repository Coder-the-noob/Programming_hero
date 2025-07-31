/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 65;

const isStudent = false; // Change to true if the person is a student

let ticketFare =800;

if (age < 10) {
    ticketFare = 0; // Free for children
} else if (isStudent) {
    ticketFare = 800 * 0.5; // 50% discount for students
} else if (age >= 60) {
    ticketFare = 800 * 15 / 100; // 15% discount for senior citizens } 
    ticketFare = 800 - ticketFare; // Calculate discounted fare
} else {
    ticketFare = 800; // Regular fare
}

console.log("Ticket Fare: " + ticketFare + " tk");