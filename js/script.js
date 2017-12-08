var link = document.querySelector(".open-contact-us"); //кнопка Напишите нам
var popup = document.querySelector(".form-contact"); //секция формы
var close = popup.querySelector(".close-contact-us"); //кнопка закрытия формы
var login = popup.querySelector("[name=Your-name]"); //поле с логином
var e_mail = popup.querySelector("[name=Your-email]"); //поле с почтой
var leter = popup.querySelector("[name=text-email]"); //текст письма
var form = popup.querySelector("form"); //форма
var login_restore = localStorage.getItem("login");
var email_restore = localStorage.getItem("e_mail");


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("visually-hidden");
    popup.classList.add("modal-show");
    if (login_restore) {
        login.value = login_restore;
    }

    if (email_restore) {
        e_mail.value = email_restore;
    }

    if(login_restore && email_restore) {
        leter.focus();
    } 
    else {
        if(login_restore && !email_restore) {
        e_mail.focus();
        }
        else{
        login.focus();
        }
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("visually-hidden");
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !e_mail.value || !leter.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
        console.log("Заполните все поля пожалуйста !");
        if (!leter.value){
            leter.classList.add("invalid");
        }
    }
    else {
        localStorage.setItem("login", login.value);
        localStorage.setItem("e_mail", e_mail.value);
    }
});

leter.addEventListener("keydown", function (evt) {
    if (leter.value) {
        leter.classList.remove("invalid");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (!popup.classList.contains("visually-hidden")) {
        popup.classList.add("visually-hidden");
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
        }
    }
});
