const sumToCycle = (n) => {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
};

const sumToRecursion = (n) => {
  if (n > 1) {
    return n + sumTo(n - 1);
  }
  return 1;
};

const sumToFormula = (n) => {
  return (n * (n + 1)) / 2;
};

//Самый быстрый по формуле, так как использует всего три операции
// Самый медленный - рекурсия, затраты на организацию вложенных вызовов

//Для большинства интерпретаторов 100 000 вызовов - за пределами возможностей
