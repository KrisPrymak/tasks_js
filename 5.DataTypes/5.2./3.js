const readNumber = () => {
  let result;
  do {
    result = prompt("Number?");
  } while (!isFinite(result));

  if (result === "" || result === null) {
    return null;
  }

  return +result;
};
