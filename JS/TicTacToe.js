//Create behavior for Tic Tac Toe Game

var update = document.querySelector("#box1");
var player = document.querySelector("#player").innerText;

update.addEventListener("click", function(e) {
    if  (player = "Player 1 Turn")  {
        update.textContent = "X";
        player.textContent = "Player 2 Turn";
    } else {
        update.textContent = "O";
        player.textContent = "Player 1 Turn";
    }
})