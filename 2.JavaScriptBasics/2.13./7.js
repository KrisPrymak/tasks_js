const simpleNumbers = (num) => {
  let result = [];

  for (let i = 2; i <= num; i++) {
    (i % 2 === 0 || i % 3 === 0) && i !== 0 && i !== 1 && i !== 2 && i !== 3
      ? ""
      : result.push(i);
  }
  return result;
};

console.log(simpleNumbers(15));
