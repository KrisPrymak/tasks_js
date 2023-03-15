function sum(a) {
  let addNum = function (b) {
    return sum(a + b);
  };

  addNum.valueOf = function () {
    return a;
  };
  return addNum;
}

alert(sum(1)(2) == 3); // 3
alert(sum(5)(-1)(2) == 6); // 6
alert(sum(6)(-1)(-2)(-3) == 0); // 0
alert(sum(0)(1)(2)(3)(4)(5) == 15); // 15
