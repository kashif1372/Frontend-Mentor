const form = document.querySelector(".content form");
const email = document.querySelector(".content form input[type=email]");
const error = document.querySelector(".error");
const error_icon = document.querySelector(".error-icon");


const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let emailValue = email.value ;
    // console.log(emailValue);

    if (validateEmail(emailValue)) {
        // console.log("Email is valid");
        error.classList.add("hide");
        error_icon.classList.add("hide");
    } else {
        // console.log("Email is invalid");
        error.classList.remove("hide");
        error_icon.classList.remove("hide");
        
    }

})



