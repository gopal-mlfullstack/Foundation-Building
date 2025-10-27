let count = 0;
function increment() {
  const countEl = document.getElementById("count-el");
  const current = parseInt(countEl.innerText, 10) || 0;
  countEl.innerText = current + 1;
  count += 1;
}

function save() {
  const saveEl = document.getElementById("save-el");
  const dash = " - ";
  saveEl.innerText += count + dash;
  count = 0;
  document.getElementById("count-el").innerText = 0;
}

function addClickEffect(buttonId, duration = 150) {
  const btn = document.getElementById(buttonId);
  if (!btn) return;

  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    setTimeout(() => {
      btn.classList.remove("clicked");
    });
  });
}

addClickEffect("save-btn");
addClickEffect("increment-btn");
