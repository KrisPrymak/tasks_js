let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const sumSalaries = (salaries) => {
  let result = 0;
  for (let sal of Object.values(salaries)) {
    result += sal;
  }
  return result;
};

alert(sumSalaries(salaries)); // 650
