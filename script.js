/* Find classes or IDs */
let clue1 = document.querySelector("#clue-1");
let button = document.querySelector("#button");
let clue2 = document.querySelector("#clue-2");
let club = document.querySelector("#club");
let page = document.querySelector(".hero");
let body = document.querySelector("#main-body");

/* Button for the key - Already done! */
button.addEventListener("click", (e) => {
  button.classList.add("hidden");
  clue2.classList.remove("hidden");
});

const keysPressed = [];
const passwordOne = "what";
const passwordTwo = "732";
const keyFound = false;
window.addEventListener("keydown", (e)=>{
  keysPressed.push(e.key);
  const password1Guess = keysPressed.slice(-passwordOne.length).join("");
  console.log(e);
  if(password1Guess === passwordOne){
    console.log("Correct password");
    clue1.classList.add("hidden");
    button.classList.remove("hidden");
    keyFound = true;
  }
  const password2Guess = keysPressed.slice(-passwordTwo.length).join("");
  if(password2Guess === passwordTwo && keyFound){
    console.log("Correct password");
    clue2.classList.add("hidden");
    club.classList.remove("hidden");
  }
})
