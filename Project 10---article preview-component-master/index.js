const share = document.querySelector(".share");
const share2 = document.querySelector(".share-hide");
const share3 = document.querySelector(".share-details");
const arrow = document.querySelector(".triangle-down");


share.addEventListener("click",()=>{
    share3.classList.toggle("hide");
    arrow.classList.toggle("hide-arrow");
});

share2.addEventListener("click",()=>{
    share3.classList.toggle("hide");
});

