// generate a random number from 1 to 6
const firstRandomNum = Math.floor(Math.random() * 6) + 1;
//image dice
const firstDiceImage = "photo/dice" + firstRandomNum + ".png";

document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);

// generate a random number from 1 to 6
const secondRandomNum = Math.floor(Math.random() * 6) + 1;
//image dice
const secondDiceImage = "photo/dice" + secondRandomNum + ".png";

document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage);

//logic for winner
if (firstRandomNum > secondRandomNum) {
  document.querySelector("h1").innerHTML = "The Winner is User 1";
} else if (firstRandomNum < secondRandomNum) {
  document.querySelector("h1").innerHTML = "The Winner is User 2";
} else {
  document.querySelector("h1").innerHTML = "Its a Draw";
}
