let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count = count + 1;
  countEl.innerText = count;
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {
  console.log("Save button Clicked!");
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
