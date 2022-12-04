const loginForm = document.querySelector("#login-form");
const loginInput =loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  localStorage.setItem(USERNAME_KEY, loginInput.value)
  paintGreetings();
  }

function paintGreetings(){
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  
  greeting.innerText = `안녕하세요 ${username}님`; 
  }

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
   loginForm.classList.remove(HIDDEN_CLASSNAME); // form class hidden delete
   loginForm.addEventListener("submit", onLoginSubmit);

  // show the form
} else {
    paintGreetings();
  //show the h1
}
