const form = document.querySelector(".content form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const error_1 = document.querySelector(".error-1")
const error_2 = document.querySelector(".error-2")
const error_3 = document.querySelector(".error-3")
const error_4 = document.querySelector(".error-4")

const firstNameclass = document.querySelectorAll(".firstNameclass");
const lastNameclass = document.querySelectorAll(".lastNameclass");
const emailclass = document.querySelectorAll(".emailclass");
const passwordclass = document.querySelectorAll(".passwordclass");

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let firstNameVal = firstName.value;
    let lastNameVal = lastName.value;
    let emailVal = email.value;
    let passwordVal = password.value;

    // console.log(firstNameVal+lastNameVal+emailVal+passwordVal);



    if(validateEmail(emailVal)){
        emailclass.forEach(em=>{
            em.classList.add("hide");
            error_3.classList.remove("red");
    })
    }else{
        emailclass.forEach(em=>{
            em.classList.remove("hide");
            error_3.classList.add("red");
    })
    }


    if(firstNameVal==""){
        firstNameclass.forEach(first=>{
            first.classList.remove("hide"); 
            error_1.classList.add("red");  
    })
      
    }
    else{
        firstNameclass.forEach(first=>{
            first.classList.add("hide");
            error_1.classList.remove("red");
    })
      
    }



    if(lastNameVal==""){
        lastNameclass.forEach(last=>{
            last.classList.remove("hide");
            error_2.classList.add("red");
    })
        
    }else{
        lastNameclass.forEach(last=>{
            last.classList.add("hide");
            error_2.classList.remove("red");
    })
        
    }



    if(passwordVal==""){
        passwordclass.forEach(pass=>{
            pass.classList.remove("hide");
            error_4.classList.add("red");
    })
       
    }else{
        passwordclass.forEach(pass=>{
            pass.classList.add("hide");
            error_4.classList.remove("red");
    })
       

    }




});
