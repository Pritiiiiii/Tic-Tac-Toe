let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Reset");
let newgamebtn = document.querySelector("#new-btn");
let msg = document.querySelector('#msg');
let msgC = document.querySelector('.msg-container')
//player X,Player O
let turnO = true;
//2D array array of array
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
//add event listener to perform some action

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO) {
      //player O ka chance
      box.innerText = "0";
      turnO = false; //ab player X ko chance isliye false kiya
    } else {
      box.innerText = "X"; //print X
      turnO = true;
    }
    box.classList = "di"; //we can click only ones on each box
    checkwinner();
    resetbtn.addEventListener(
      "click",
      (reset = () => {
        box.innerText = "";
        box.classList = "box";
      })
    );
  });
});

const showWinner=(winner)=>{
    msgC.classList = 'msg-container';
    msg.innerText = `Winner is ${winner}`;
}

newgamebtn.addEventListener('click', rset=()=>{
    window.location.reload();
})
const checkwinner = () => {
  //check pattern
  for (let pattern of winPatterns) {
    let pos1value = boxes[pattern[0]].innerText;
    let pos2value = boxes[pattern[1]].innerText;
    let pos3value = boxes[pattern[2]].innerText;
    if (pos1value != "" && pos2value != "" && pos3value != "") {
      //there is no empty box
      //check all values are equal
      if ((pos1value == pos2value) && (pos2value== pos3value)) {
        console.log("Winner", pos1value);
        showWinner(pos1value);
    }
}
}
};
