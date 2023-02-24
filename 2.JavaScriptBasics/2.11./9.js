let login = prompt("Your login?", "");
let password;

if (login == "" || login == null) {
  alert("Отменено");
} else if (login == "Админ") {
  password = prompt("Your password?", "");

  if (password == "" || password == null) {
    alert("Отменено");
  } else if (password == "Я главный") {
    alert("Здравствуйте!");
  } else {
    alert("Неверный пароль");
  }
} else {
  alert("Я вас не знаю");
}
