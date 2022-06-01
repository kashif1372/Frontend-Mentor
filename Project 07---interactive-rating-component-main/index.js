const submit_btn= document.querySelector('.submit-btn');
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const ratingbtns = document.querySelectorAll('.rating-btn');
const score = document.querySelector('.score');
let star_score = 3;


submit_btn.addEventListener('click',Onsubmit);

function Onsubmit(){
    score.textContent=star_score;
    card1.classList.add('hide');
    card2.classList.remove('hide');
    // console.log("submit clicked");
}


ratingbtns.forEach(btn=>{
    btn.addEventListener('click',handle_rating);
});

function handle_rating(event){
    ratingbtns.forEach(btn=>{
        btn.classList.remove('active');
    });

    event.target.classList.add('active');
    star_score=event.target.textContent;
}

