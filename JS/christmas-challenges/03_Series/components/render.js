
export function render(selector, position, template) {
    document.querySelector(selector).insertAdjacentHTML(position, template);
}