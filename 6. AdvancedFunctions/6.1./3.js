const fib = (n) => {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let current = a + b;
    a = b;
    b = current;
  }
  return b;
};
