var link = document.querySelector(".post-btn");
var popup = document.querySelector(".write-us-site");

var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=name-1]");
var password = popup.querySelector("[name=e-mail]");
var text = popup.querySelector("[name=text-type]");
var form = popup.querySelector("form");

var storage = localStorage.getItem("login");


try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!login.value||!password.value||!text.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login",login-value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});
