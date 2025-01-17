import { createHeader } from './components/header.js';
import { tttGame } from './ttt.js';

console.log('Index loaded');

// function greeting() {

// const question = '¿Como te llamas?'
//     const userName = prompt(question)
//     if(userName === null || userName === '')  return
//     const response = `Hola, ${userName}, que tal estas`
//     alert(response)

//     // if(userName !== null) {
//     //     const response = `Hola, ${userName}, que tal estas`
//     //     alert(response)
//     // }
// }

// const button = document.querySelector('form button')
// button.addEventListener('click', greeting)

function checkDOM() {
    // El DOM como "árbol" de objetos
    console.dir(document);

    // Acceso secuencial a cualquier nodo
    console.dir(document.children[0].children[1].children[0].children[1]);

    // Acceso directo buscando un nodo: API selectors
    const headerElement = document.querySelector('header');
    console.dir(headerElement.querySelectorAll('img'));

    document.querySelector('#header1');
    document.querySelectorAll('p');
    document.querySelectorAll('.basic');
    document.querySelectorAll('[name="valor de name"]');
    document.querySelector('article>p.header');

    // Acceso directo "previo"
    document.getElementById('header1');
    document.getElementsByTagName('p');
    document.getElementsByClassName('basic');
    document.getElementsByName('valor de name');
}

const title = 'Juegos';
// document.querySelector('header').outerHTML = createHeader_brown(title);

document
    .querySelector('body')
    .insertAdjacentHTML('afterBegin', createHeader(title));

tttGame();

const elementButton = document.querySelector('.test button');
elementButton.setAttribute('class', 'patata');
//html: <button disabled></button>
// DOM: disabled=true
// DOM attributes:
//      0: disabled
//      disabled: disabled
// elementButton.disabled = true;
// html: <button disabled></button>
// DOM: disabled=true
// DOM attributes:
//      0: disabled
//      disabled: disabled
console.dir(elementButton);
console.log('disable', elementButton.disabled);
console.log('attributes', elementButton.attributes);

elementButton.removeAttribute('disabled');
// // elementButton.disabled = false;
// console.log('disable', elementButton.disabled);
// console.log('attributes', elementButton.attributes);
