import { MenuItem } from './header.js';

export const renderMenu = (items: MenuItem[]) => {
    return items
        .map(
            (item) => `
            <li class="menu-tablet">
                <a href="${item.path}">${item.label}</a>
            </li>
        `,
        )
        .join('');
};
