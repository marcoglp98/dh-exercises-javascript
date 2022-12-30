const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

let filtered = Object.entries(person).filter(
  ([key, val]) => typeof val === "number"
);

console.log(filtered); // Should return: { id: 1, age: 25 }
