import { createHeader } from '../components/header.js';

export function loadContacts() {
    console.log('loaded contacts');
    const pageTitle = 'Contactos';
    createHeader(pageTitle);
}
