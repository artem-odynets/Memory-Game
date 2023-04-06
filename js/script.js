let firstCard, secondCard;
let hasSecondCard = false;
let cardLocked = false;

const cards = document.querySelectorAll('.image__card');

  const rebootButton = document.querySelector('.reboot');

  rebootButton.onclick = () => {
    cards.forEach(card => {
        card.classList.remove('flip');
    })
  }
  
const flipCard = (event) => {
    if(cardLocked) return;
let target = event.target.parentElement;
    target.classList.add('flip');
    if(!hasSecondCard) {
        firstCard = target;
        hasSecondCard = true;
    } else {
        secondCard = target;
        hasSecondCard = false;
        notMatch();
    }
    
}

const notMatch = () => {
    
    if(firstCard.dataset.framefork === secondCard.dataset.framefork) {
       firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
       
    } else {
        cardLocked = true;
        setTimeout(() => {
            
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            
            firstCard, secondCard = null;
            hasSecondCard, cardLocked = false;
        }, 900);
       
    }
   
}




const generateRandomCard = (card) => {
    const randomCard = Math.floor(Math.random() * cards.length);
    card.style.order = randomCard;
}


    cards.forEach(card => {
        card.addEventListener('click', flipCard);

    generateRandomCard(card);

    }) 



      

        
  