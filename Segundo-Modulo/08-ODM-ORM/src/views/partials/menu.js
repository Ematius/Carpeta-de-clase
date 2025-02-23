export const renderMenu = (items) => {
    return items
        .map((item) => `
            <li class="menu-tablet">
                <a href="${item.path}">${item.label}</a>
            </li>
        `)
        .join('');
};
