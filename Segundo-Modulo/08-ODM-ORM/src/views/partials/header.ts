import { renderMenu } from './menu.js';

const html = String.raw;

export const menuItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Productos', path: '/products' },
    { label: 'About', path: '/about' },
];

export type MenuItem = {
    label: string;
    path: string;
};

export function renderHeader(title: string) {
    const img = '/assets/logo-brown-bisque.svg';
    const cssClass = 'main-header';
    const headerTemplate = html`
        <header class="${cssClass}">
            <nav>
                <ul>
                    <li class="menu-header">
                        <a href="/">
                            <img src=${img} width="50" alt="Logo" />
                            <h1 id="header1" data-id="1" class="h2">
                                ${title}
                            </h1>
                        </a>
                    </li>
                    <li class="menu-mobile">
                        <a href="#">
                            <span class="fa-solid fa-bars"></span>
                        </a>
                    </li>
                    ${renderMenu(menuItems)}
                </ul>
            </nav>
        </header>
    `;
    return headerTemplate;
}
