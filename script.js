const submit = document.getElementById('submit');
const firstPage = document.getElementById('container');
const secondPage = document.getElementById('report-page');
const ratingText = document.getElementsByClassName('rating');
const rateButtons = document.querySelectorAll('.rate');
let rate = document.getElementById('rate-number');


let save;
for(let i = 0; i < rateButtons.length; i++){
    rateButtons[i].addEventListener("click", ()=>{
        save = rateButtons[i].innerHTML;
    })
}


submit.addEventListener('click', (event)=>{
    event.preventDefault();
    firstPage.style.display = "none";
    secondPage.classList.remove('second-hide');
    rate.innerText = save;
    if(!save){
    rate.innerText = "0";
    }
})





// one.addEventListener("click", rateVerification)

// function rateVerification(){
//     if(one.click){
//         ratingText.innerText("please you clicked 1")
//     }
// }



