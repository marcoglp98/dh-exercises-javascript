const user = {
  id: 1,
  name: "John",
  age: 25,
};

let JSONresult = JSON.stringify(user);

localStorage.setItem('user', JSONresult);

let parsed = JSON.parse(localStorage.getItem('user'));
console.log(parsed);