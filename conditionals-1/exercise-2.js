// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  switch (role) {
    case "ceo":
      console.log("The ceo salary is: " + 2200);
      break;
    case "manager":
      console.log("The ceo salary is: " + 1800);
      break;
    case "cto":
      console.log("The cto salary is: " + 1800);
      break;
    case "developer":
      console.log("The developer salary is: " + 1500);
      break;
    default:
      console.log("The other salary is: " + 1000);
  }
}

const ceoSalary = calculateSalary("ceo");
const managerSalary = calculateSalary("manager");
const ctoSalary = calculateSalary("cto");
const developerSalary = calculateSalary("developer");
const otherSalary = calculateSalary("other");
