switch (+prompt("Введите число между 0 и 3", "")) {
  case 0:
    return alert("Вы ввели число 0");
  case 1:
    return alert("Вы ввели число 1");
  case 2:
  case 3:
    return alert("Вы ввели число 2, а может и 3");
}
  