const advice_no = document.querySelector("#advice-no");
const advice_text = document.querySelector("#advice-text");

const fetchAdvice = async ()=>{
    const data = await fetch("https://api.adviceslip.com/advice");
    const jsondata = await data.json();
    // console.log(jsondata);
    advice_no.innerHTML = `Advice # ${jsondata.slip.id}`
    advice_text.innerHTML = `"${jsondata.slip.advice}"`

}

fetchAdvice();