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
    
// beforeend: Último hijo del target (target.lastElementChild).
// beforebegin: Hermano anterior a target (target.previousElementSibling).
// afterend: Hermano siguiente a target (target.nextElementSibling).
// afterbegin: Primer hijo del target (target.firstElementChild).
    const getElementOptions = {
        beforeend: target.lastElementChild,
        beforebegin: target.previousElementSibling,
        afterend: target.nextElementSibling,
        afterbegin: target.firstElementChild,
    };

    return getElementOptions[position];
}
