const functAge = () => {
  return age > 18 ? true : confirm("Родители разрешили?");
};

const funcAge = () => {
  return age > 18 || confirm("Родители разрешили?");
};
