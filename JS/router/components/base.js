export function render(selector, position, template) {
    const validPositions = [
        'beforeend',
        'beforebegin',
        'afterend',
        'afterbegin',
    ];

    if (!validPositions.includes(position)) {
        return;
    }
    const target = document.querySelector(selector);
    target.insertAdjacentHTML(position, template);

    const getElementOptions = {
        beforeend: target.lastElementChild,
        beforebegin: target.previousElementSibling,
        afterend: target.nextElementSibling,
        afterbegin: target.firstElementChild,
    };

    return getElementOptions[position];
}
