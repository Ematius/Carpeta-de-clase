const elementBurger = document.querySelector('.fa-bars');
const elementDialog = document.querySelector('dialog');
const elementClose = document.querySelector('dialog');

console.dir(elementDialog);
console.dir(elementBurger);

function handlerClick() {
    elementDialog.showModal();
}
function handlerClose() {
    elementDialog.close();
}
elementBurger.addEventListener('click', handlerClick);
elementClose.addEventListener('click', handlerClose);
