// document.getElementById("count").innerText = 5

// change the count-el in the HTML to reflect the new count

function increment() {
  const countEL = document.getElementById("count-el");
  const current = parseInt(countEL.innerText, 10) || 0;
  countEL.innerText = current + 1;
}
