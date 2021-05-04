const button = document.getElementById('span-js');
const sectionContainer = document.getElementsByClassName('section-container');
const sectionText = document.getElementsByClassName('section-text');
const sectionCards = document.getElementsByClassName('card');

console.log(button);
console.log(sectionContainer)
console.log(sectionCards);

button.addEventListener('mouseover', function (e){
    sectionContainer[0].classList.toggle('section-hover-container');
    sectionText[0].classList.toggle('section-hover-div');

    for(let card of sectionCards){
        card.classList.toggle('section-hover-card');
    }
})

button.addEventListener('mouseout', function (e){
    sectionContainer[0].classList.toggle('section-hover-container');
    sectionText[0].classList.toggle('section-hover-div');

    for(let card of sectionCards){
        card.classList.toggle('section-hover-card');
    }
})

    

