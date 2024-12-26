import { createHeader } from '../components/header.js';

export function loadPorfolio() {
    console.log('loaded porfolio');
    const pageTitle = 'Porfolio';
    createHeader(pageTitle);

    const doc = document.documentElement;

    document
        .querySelector('.toggle-switch input')
        .addEventListener('change', (event) => {
            const isDark = event.target.checked;
            console.log('toggle-switch', { isDark });
            doc.dataset.theme = isDark ? 'dark' : 'light';
        });
}
