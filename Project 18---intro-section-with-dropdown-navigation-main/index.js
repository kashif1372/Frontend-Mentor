const dropdown_btn_0 = document.querySelectorAll(".dropdown-btn")[0];
const dropdown_content_0 = document.querySelectorAll(".dropdown-content")[0];
const open_menu_0 = document.querySelectorAll(".arrow-up")[0];
const close_menu_0 = document.querySelectorAll(".arrow-down")[0];

dropdown_btn_0.addEventListener("click",()=>{
        dropdown_content_0.classList.toggle("hide");
        open_menu_0.classList.toggle("hide");
        close_menu_0.classList.toggle("hide");

        });

const dropdown_btn_1 = document.querySelectorAll(".dropdown-btn")[1];
const dropdown_content_1 = document.querySelectorAll(".dropdown-content")[1];
const open_menu_1 = document.querySelectorAll(".arrow-up")[1];
const close_menu_1 = document.querySelectorAll(".arrow-down")[1];
        
dropdown_btn_1.addEventListener("click",()=>{
        dropdown_content_1.classList.toggle("hide");
        open_menu_1.classList.toggle("hide");
        close_menu_1.classList.toggle("hide");

        });


const m_nav = document.querySelector(".m-nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");


open.addEventListener("click",()=>{
    m_nav.style.right = "0px"
})

close.addEventListener("click",()=>{
    m_nav.style.right = "-200px"
})



 

