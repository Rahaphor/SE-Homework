const gameButton = document.getElementById("letsroll");
let playerOne = 0;
let playerTwo = 0;
function reload() {
  // generate a random num from 1-6
  let firstRandomNum = Math.floor(Math.random() * 6) + 1;

  // to get the image/dice1.png upto images/dice6.png
  const firstDiceImage = "./diceImg/" + "assetsDice" + firstRandomNum + ".png";
  console.log(firstDiceImage);

  document.getElementById("img1").setAttribute("src", firstDiceImage);

  // generate a random num from 1-6
  let secondRandomNum = Math.floor(Math.random() * 6) + 1;

  // to get the image/dice1.png upto images/dice6.png
  const secondDiceImage =
    "./diceImg/" + "assetsDice" + secondRandomNum + ".png";

  document.getElementById("img2").setAttribute("src", secondDiceImage);

  if (firstRandomNum > secondRandomNum) {
    document.querySelector("h1").innerHTML = "User one have won";
    document.getElementById('userone').innerHTML = ++playerOne
  } else if (firstRandomNum < secondRandomNum) {
    document.querySelector("h1").innerHTML = "User two have won";
    document.getElementById('usertwo').innerHTML = ++playerTwo
  } else {
    document.querySelector("h1").innerHTML = "No winner its a draw";
  }
}
gameButton.addEventListener("click", reload);
