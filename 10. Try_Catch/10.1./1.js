function a() {
  try {
    alert("начало");
    return "result";
  } catch (e) {
    /// ...
  } finally {
    alert("очистка!");
  }
}

a(); // очистка!

function b() {
  try {
    alert("начало");
    throw new Error("ошибка");
  } catch (e) {
    // ...
    if ("не могу обработать ошибку") {
      throw e;
    }
  } finally {
    alert("очистка!");
  }
}

b(); // очистка!
