import { render } from './base.js';

export function createFooter(selector = 'body', position = 'beforeend') {
    const linksCollection = {
        cas: {
            url: 'https://cursoscastraining.es/cursos-subvencionados/centro-de-formacion-digital-de-san-blas/',
            title: 'CAS Training',
        },
        cfdsb: {
            url: 'https://cursoscastraining.es/cursos-subvencionados/centro-de-formacion-digital-de-san-blas/',
            title: 'Centro de Formación Digital San Blas (CFD-SB)',
            address: ['C. de Arcos de Jalón, 15', 'San Blas', '28037 Madrid'],
        },
    };
    const template = /*html*/ `
    <footer>
        <address>
            <span>
            <a href=${linksCollection.cas.url} target="_blank">${linksCollection.cas.title}</a>
            </span>
            <span>
                <a href=${linksCollection.cfdsb.url} target="_blank">${linksCollection.cfdsb.title}</a>
            </span>
            <span>${linksCollection.cfdsb.address[0]}</span>
            <span>${linksCollection.cfdsb.address[1]}</span>
            <span>${linksCollection.cfdsb.address[2]}</span>
        </address>
    </footer>
    `;

    render(selector, position, template);
}
