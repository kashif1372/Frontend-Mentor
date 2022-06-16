const bill = document.querySelector("#bill");
const people = document.querySelector("#people");
const custom = document.querySelector("#custom");
const tip_amount = document.querySelector("#tip-amount");
const total = document.querySelector("#total");
const reset = document.querySelector("#reset");
const tip = document.querySelectorAll(".tip");
const tip_perc = document.querySelectorAll(".tip-perc");
const error_msg = document.querySelector(".error-msg");
const text = document.querySelector(".text.people");


let tipval = 0.15;
let billval = 0;
let peopleval = 1;
let customval = 0;


bill.addEventListener("input",setbillvalue);
people.addEventListener("input",setpeoplevalue);
custom.addEventListener("input",setcustomvalue);


const calculateTip=()=>{
    if(peopleval>0){
        let tip_amount_val = billval / peopleval * tipval;
        let total_val = (billval/peopleval)+(tip_amount_val) ;
        tip_amount.innerHTML = tip_amount_val.toFixed(2) ;
        total.innerHTML = total_val.toFixed(2);
    }
}



function setbillvalue(){
    if(bill.value.includes(',')){
        bill.value = bill.value.replace(',','.');
    }

    
    billval=parseFloat(bill.value);
    calculateTip();
}

function setpeoplevalue(){
    peopleval=parseFloat(people.value);
    if(peopleval==0){
        error_msg.classList.remove("hide");
        text.classList.add("active");
    }else{
        error_msg.classList.add("hide");
        text.classList.remove("active");
}
    calculateTip();
}

function setcustomvalue(){
    customval=parseFloat(custom.value);
    tipval = customval/100;
    calculateTip();
}

tip.forEach(button=>{
    button.addEventListener("click",()=>{
        setactivetip(button);
    });
})

const setactivetip =(button)=>{
    tip.forEach(btn=>{
        btn.classList.remove("tip-active");
    })
    button.classList.add("tip-active");
}

tip_perc.forEach(perc=>{
    perc.addEventListener("click",()=>{
        tipval = parseFloat(perc.innerHTML)/100;
        calculateTip();
        custom.value = "";
    });
})





