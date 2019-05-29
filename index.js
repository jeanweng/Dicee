var randomNumber1 = Math.floor(Math.random() * 6 + 1);
document.getElementsByClassName("img1")[0].setAttribute("src","images/dice" + randomNumber1 + ".png");
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
document.getElementsByClassName("img2")[0].setAttribute("src","images/dice" + randomNumber2 + ".png");

var text;
if(randomNumber1 > randomNumber2){
  text = "🚩Player 1 Wins!"
}else if(randomNumber1 < randomNumber2){
  text = "Player 2 Wins! 🚩"
}else{
  text = "Draw!"
}
document.querySelector("h1").textContent = text;
