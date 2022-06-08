const empty = document.querySelector(".empty");
const error = document.querySelectorAll(".error");
const form = document.querySelector(".subscribe form");
const email = document.querySelector(".subscribe form input[type=email]");

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let emailValue = email.value;
    console.log(emailValue);


    if(validateEmail(emailValue)){
        error.forEach(err=>{
            err.classList.add("hide");
        })
        empty.classList.remove("border-red");
    }else{
        error.forEach(err=>{
            err.classList.remove("hide");
        })
        empty.classList.add("border-red");
    }
})