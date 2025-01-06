import {render} from './render.js';
import {series} from '../series.js';

function watchedSerie(serie){
    const selector = '.series-list';
    const position = 'beforeend';
    const template = /*html*/ `
    
        <li class="serie">
                <img class="serie__poster"
                    src="${serie.poster}"
                    alt="${serie.name} poster" />
                <h4 class="serie__title"> ${serie.name} </h4>
                <p class="serie__info"> ${serie.creator} (1999)</p>
                <ul class="score">
                ${[1, 2, 3, 4, 5].map(star => `
                    <li class="score__star" data-value="${star}">
                        <i class="icon--score far fa-star" title="${star}/5"></i>
                    </li>
                `).join('')} 
                </ul>
                <i class="fas fa-times-circle icon--delete"></i>
        </li>
    `;
    render(selector, position, template);

    const serieElement = document.querySelector(`${selector} .serie:last-child`);
    const stars = serieElement.querySelectorAll('.score__star');
    stars.forEach(star => {
        star.addEventListener('click',(event) =>{
            const value = parseInt(star.getAttribute('data-value'));
            updateStars(value, stars);
        })
    })

    function updateStars(value, stars) {
        stars.forEach((star) => {
            const starValue = parseInt(star.getAttribute('data-value'));
            const icon = star.querySelector('i');
            if (starValue <= value) {
                icon.classList.remove('far');
                icon.classList.add('fas');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
            }
        });
            const watchedList = document.querySelector('.series-watched');
            watchedList.appendChild(serieElement);       
    }  

    const erase = serieElement.querySelector('.icon--delete');
    erase.addEventListener('click', () => {
        serieElement.remove();
    });
}



function getSeries(){
    series.forEach(serie => watchedSerie(serie));
}
getSeries();