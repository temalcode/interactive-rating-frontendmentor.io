
// console.log('test')

const buttons = document.getElementsByClassName('rating__button');
const cardRating = document.getElementById('cardRating')
const selectedRating = document.getElementById('selectedRating')
const thankYou = document.getElementById('thankYou')

let userSelectedRating = 0;

function ratingButton(ratingNumber){
    buttons[ratingNumber].classList.toggle('rating__button--clicked')

    userSelectedRating = ratingNumber + 1;
    
    for(i = 0; i < 5; i++){
        if(i != ratingNumber)
        buttons[i].classList.remove('rating__button--clicked')
    }
}


function submitButton(){
    // console.log('test submit')   
    cardRating.style.display = 'none' 
    thankYou.style.display = 'flex'
    selectedRating.innerText = userSelectedRating
}
