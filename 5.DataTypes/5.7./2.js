function aclean(arr) {
  let newMap = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    newMap.set(sorted, word);
  }

  return Array.from(newMap.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr));
