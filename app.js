const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input")
const greetings = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, username);
    greetings.innerText = `Hello ${username}!`;
    greetings.classList.remove(HIDDEN_CLASSNAME);
}

// function paintGreetings() {}

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    greetings.classList.remove(HIDDEN_CLASSNAME);
    grettings.innerText = `Hello ${savedUsername}`;
}