export function render(
    selector: string,
    position: InsertPosition,
    template: string,
) {
    const target = document.querySelector(selector);
    if (!target) {
        throw new Error(`Element with selector ${selector} not found`);
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
