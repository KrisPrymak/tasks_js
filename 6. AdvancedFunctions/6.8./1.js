function printNumbers(from, to) {
  let start = from;

  let timerId = setInterval(() => {
    console.log(start);

    if (start >= to) {
      clearInterval(timerId);
    }
    
    start++;
  }, 1000);

}
