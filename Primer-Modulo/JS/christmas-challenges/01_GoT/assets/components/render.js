export function render (selector, position, template) {

    const validPositions = [
        'beforeend',
        'beforebegin',
        'afterend',
        'afterbegin',
    ];

    if (!validPositions.includes(position)) {
        return console.log('Position no valida');;
    }
  const element = document.querySelector(selector);
  element.insertAdjacentHTML(position, template);

}