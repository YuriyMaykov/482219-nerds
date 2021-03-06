var link = document.querySelector(".open-contact-us");
var popup = document.querySelector(".form-contact");
var close = popup.querySelector(".close-contact-us");
var form = popup.querySelector("form.contact-us");
var login = popup.querySelector("[name=your-name]");
var e_mail = popup.querySelector("[name=your-email]");
var leter = popup.querySelector("[name=text-email]");
// var login_restore = localStorage.getItem("login");
// var email_restore = localStorage.getItem("e_mail");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("visually-hidden");
  popup.classList.add("modal-show");
  // if (login_restore) {
  //   login.value = login_restore;
  // }

  // if (email_restore) {
  //   e_mail.value = email_restore;
  // }

  // if(login_restore && email_restore) {
  //   leter.focus();
  // }else{
  //   if(login_restore && !email_restore) {
  //     e_mail.focus();
  //   }
  //   else{
  //     login.focus();
  //   }
  // }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("visually-hidden");
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
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

form.addEventListener("submit", function (evt) {
  var another_error=false;
	var inputs = form.querySelectorAll("input[required]");
	for(var i = 0; i < inputs.length; i++){
    if (inputs[i].classList.contains("error")) {
    another_error=true;
    }
  }

  if ((!login.value || !e_mail.value) || another_error==true) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
  // else {
  //   localStorage.setItem("login", login.value);
  //   localStorage.setItem("e_mail", e_mail.value);
  // }
});

var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(form != undefined){
	var inputs = form.querySelectorAll("input[required]");
	for(var i = 0; i < inputs.length; i++){
		inputs[i].oninput = function(){
			if(this.name == "your-email"){
				if(this.value.length > 7){
					if(re.test(this.value)){
						this.classList.remove("error")
          }
          else{
						this.classList.add("error")
					}
        }
        else{
					if(this.value.length == 0){
						this.classList.remove("error")
          }
          else{
						this.classList.add("error")
				  }
				}
      }
      else{
				if(this.value.length < 2){
					if(this.value.length == 0){
						this.classList.remove("error")
          }
          else{
						this.classList.add("error")
					}
        }
        else{
					this.classList.remove("error")
				}
			}
		}
	}
}

