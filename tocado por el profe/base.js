
export function render(selector, position, template){
    const validPositions = ['beforebegin', 'afterbegin', 'beforeend', 'afterend'];
    if(!validPositions.includes(position)) return console.error('Invalid position. Use one of the following: beforebegin, afterbegin, beforeend, afterend');
    
    const target = document.querySelector(selector);
    target.insertAdjacentHTML(position, template);

    const getElementOptions = {
        beforeend: container.lastElementChild,
        beforebegin: container.previousElementSibling,
        afterbegin: container.firstElementChild,
        afterend: container.nextElementSibling
    }
    return getElementOptions[position];
}