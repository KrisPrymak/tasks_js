const printListRecursion = (list) => {
  if (list.next) {
    printListRecursion(list.next);
  }
  console.log(list.value);
};

const printListCycle = (list) => {
  let current = list;
  const result = [];
  while (current) {
    result.push(current.value);
    current = current.next;
  }
  result.reverse().map((n) => console.log(n));
};
