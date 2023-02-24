let date = new Date(2012, 0, 3); // 3 января 2012 года

const getLocalDay = (date) => {
  let dOfW = date.getDay();
  return dOfW === 0 ? 7 : dOfW;
};

alert(getLocalDay(date)); // вторник, нужно показать 2
