function sumUntil(maxValue) {
  let result = maxValue;
  for (let i = 0; i < maxValue; i++) {
    result += i;
  }
  return result;
}

console.log(sumUntil(5));
