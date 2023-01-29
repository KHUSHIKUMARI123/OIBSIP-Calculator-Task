const input = document.querySelector("input");
input.addEventListener("keydown", function(event) {
  if (event.key === "=") {
    const expression = input.value.replace(/\=+/g, "");
    const result = eval(expression);
    input.value = result;
  }
  else if (event.key === "Delete") {
    input.value = "";
  }
});
