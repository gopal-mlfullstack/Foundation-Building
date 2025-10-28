let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;

let sum = firstCard + secondCard;
if (sum < 21) {
  console.log("Do you want to draw a card!🙂");
} else if (sum === 21) {
  console.log("Wohoo! You've got the Blackjack!🥰");
} else {
  console.log("You're out of the game!😭");
}
