button.addEventListener("click", () => alert("1")); // true

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2); //true