const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const $btn = document.querySelector("#btn");
const $colorsspan = document.querySelector(".color");

$btn.addEventListener("click", function () {
  //get random number between 0-3

  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  $colorsspan.textContent = colors[randomNumber];
});

function getRandomNumber() {
  //   return Math.random();
  return Math.floor(Math.random() * 4);
}
