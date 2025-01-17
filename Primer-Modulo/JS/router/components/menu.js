import { render } from './base.js';

export function createMenu(options, selector = 'body', position = 'beforeend') {
    const menuString = options
        .map((item) => `<li><a href="${item.path}">${item.label}</a></li>`)
        .join('');

    const template = /*html*/ `
        <nav>
            <ul>
                ${menuString}
            </ul>
        </nav>
    `;

    render(selector, position, template);
}
