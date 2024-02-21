//create a prompt so user can enter flavors upon opening web page

const userInputString = prompt("Enter yogurt flavors separated by commas.");
//create a table that lists how many of each flavor they have ordered
const flavors = userInputString.split(",").map((s) => s.trim());

console.log("user input array:", flavors);
//create an object to store the counts

const obj = {};

for (let flavor of flavors) {
  flavor in obj ? (obj[flavor] = obj[flavor] + 1) : (obj[flavor] = 1);
}
console.table(obj);
