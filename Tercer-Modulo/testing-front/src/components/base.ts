export function render(selector:string, position:InsertPosition, template:string) {
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
    if (!target) {
        return;
    }

    target.insertAdjacentHTML(position, template);

    const getElementOptions = {
        beforeend: target.lastElementChild,
        beforebegin: target.previousElementSibling,
        afterend: target.nextElementSibling,
        afterbegin: target.firstElementChild,
    };

    return getElementOptions[position];
}
