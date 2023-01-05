function printAsyncName(name) {
  setTimeout(() => console.log(sayHello()), 1000);
  setTimeout(() => console.log(name), 2000);
}

let sayHello = () => "Hello";

printAsyncName("Marco");
