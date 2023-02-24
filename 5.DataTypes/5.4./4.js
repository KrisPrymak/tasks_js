const sumInput = () => {
  let arrNumbers = [];

  while (true) {
    let number = prompt("Your number?", 0);

    if (number === "" || number === null || !isFinite(number)) break;

    arrNumbers.push(+number);
  }

  let sum = 0;
  for (let num of arrNumbers) {
    sum += num;
  }
  return sum;
  // return arrNumbers.reduce((a, b) => a + b);
};
