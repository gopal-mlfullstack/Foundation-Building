function getNumbers() {
  const num1 = parseFloat(document.getElementById("first-num").value);
  const num2 = parseFloat(document.getElementById("second-num").value);
  return { num1, num2 };
}
function add() {
  const { num1, num2 } = getNumbers();
  document.getElementById("result").innerText = num1 + num2;
}
function subtract() {
  const { num1, num2 } = getNumbers();
  document.getElementById("result").innerText = num1 - num2;
}
function divide() {
  const { num1, num2 } = getNumbers();
  document.getElementById("result").innerText = num2 !== 0 ? num1 / num2 : "∞";
}
function multiply() {
  const { num1, num2 } = getNumbers();
  document.getElementById("result").innerText = num1 * num2;
}
function addClickEffect(buttonId, duration = 150) {
  const btn = document.getElementById(buttonId);
  if (!btn) return;
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    setTimeout(() => {
      btn.classList.remove("clicked");
    }, duration);
  });
}
// Apply click effects
addClickEffect("add-btn");
addClickEffect("sub-btn");
addClickEffect("div-btn");
addClickEffect("mut-btn");
