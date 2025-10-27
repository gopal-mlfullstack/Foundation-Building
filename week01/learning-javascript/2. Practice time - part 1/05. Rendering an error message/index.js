// When the user clicks the purchase button, render out

// "Something went wrong, please try again" in the paragraph

// that has the id="error"
document.getElementById("purchase-btn").addEventListener("click", function () {
  document.getElementById("error").innerText =
    "Something went worng please try again!";
});
