const add = (number1, number2) => {
  return number1 + number2;
}
const subtract = (number1, number2) => {
  return number1 - number2;
}
const multiply = (number1, number2) => {
  return number1 * number2;
}
const divide = (number1, number2) => {
  if (number2 === 0) {
    throw new Error("Cannot divide by zero");
  }
  return number1 / number2;
}
document.getElementById("add").addEventListener("click", () => {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = add(number1, number2);
  document.getElementById('calculation-result').innerText = `Result: ${result}`;
});
document.getElementById("subtract").addEventListener("click", () => {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = subtract(number1, number2);
  document.getElementById('calculation-result').innerText = `Result: ${result}`;
});
document.getElementById("multiply").addEventListener("click", () => {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = multiply(number1, number2);
  document.getElementById("calculation-result").innerText = `Result: ${result}`;
});
document.getElementById("divide").addEventListener("click", () => {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  try {
    const result = divide(number1, number2);
    document.getElementById("calculation-result").innerText = `Result: ${result}`;
  } catch (error) {
    document.getElementById("calculation-result").innerText = error.message;
  }
});