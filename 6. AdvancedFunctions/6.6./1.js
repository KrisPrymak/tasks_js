function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = function (value) {
    return (count = value);
  };

  counter.decrease = function () {
    return count--;
  };

  return counter;
}
