const printListRecursion = (list) => {
  console.log(list.value);
  if (list.next) {
    printListRecursion(list.next);
  }
};

const printListCycle = (list) => {
  let current = list;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
};

//Лучше цикл, так как в рекурсии тратится производительность на организацию вложенных вызовов