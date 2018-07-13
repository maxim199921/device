var loginlink = document.querySelector(".login-link-img");
var loginpopup = document.querySelector(".login-modal");

var loginclose = loginpopup.querySelector(".modal-close");
var loginlogin = loginpopup.querySelector("[name=login]");
var loginpassword = loginpopup.querySelector("[name=password]");
var loginform = loginpopup.querySelector("form");


loginlink.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginpopup.classList.add("modal-show");
    loginlogin.focus();
});

loginclose.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginpopup.classList.remove("modal-show");
    loginpopup.classList.remove("modal-error");
});

loginform.addEventListener("submit", function (evt) {
    if (!loginlogin.value||!loginpassword.value) {
        evt.preventDefault();
        loginpopup.classList.remove("modal-error");
        loginpopup.classList.add("modal-error");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (loginpopup.classList.contains("modal-show")) {
            loginpopup.classList.remove("modal-show");
            loginpopup.classList.remove("modal-error");
        }
    }
});