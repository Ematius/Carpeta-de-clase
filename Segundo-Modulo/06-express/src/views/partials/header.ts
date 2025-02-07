// import { html } from 'lit-html';

const items = [
    { label: 'Index', path: './' },
    { label: 'Portfolio', path: './portfolio' },
    { label: 'Contacts', path: './contacts' },
    { label: 'About', path: './about' },
];

export const menuItems = items
    .map(
        (item) => `
            <li class="menu-tablet">
                <a href="${item.path}">${item.label}</a>
            </li>
        `,
    )
    .join('');

export function createHeader(title: string) {
    const img = './assets/logo-golden-bisque.svg';
    const cssClass = 'main-header';
    const headerTemplate = `
        <header class="${cssClass}">
            <nav>
                <ul>
                    <li class="menu-header">
                        <a href="./index.html">
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
                    ${menuItems}
                </ul>
            </nav>
        </header>
    `;
    return headerTemplate;
}
