const camelize = (str) => {
  return str
    .split("-")
    .map((i, n) => (n !== 0 ? i[0].toUpperCase() + i.slice(1) : i))
    .join("");
};
