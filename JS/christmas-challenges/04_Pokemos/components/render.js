export function render(selector, position, template){
    const element = document.querySelector(selector);
    element.insertAdjacentHTML(position,template);
}