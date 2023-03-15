function byField(value) {
  return (a, b) => (a[value] > b[value] ? 1 : -1);
}
