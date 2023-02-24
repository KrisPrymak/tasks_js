function unique(arr) {
  let newArr = [];
  arr.map((s) => (newArr.includes(s) ? s : newArr.push(s)));
  return newArr;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

alert(unique(strings)); // кришна, харе, :-O
