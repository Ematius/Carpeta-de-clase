import { createHeader } from '../components/header.js';

export function loadAbout() {
    console.log('loaded about');
    const pageTitle = 'Acerca de';
    createHeader(pageTitle);
}
