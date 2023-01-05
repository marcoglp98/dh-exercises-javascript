function repeatHello(callback) {
  let restart = setInterval(callback, 1000);
  setTimeout(() => clearInterval(restart), 5000);
}

let hello = () => console.log("Hello");

repeatHello(hello);
