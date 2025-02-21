const html = String.raw;

export function renderFooter() {
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
        linkedin: {
            url: 'https://www.linkedin.com/in/alejandrocerezo/',
            title: 'LinedIn',
            icon: 'fa-brands fa-linkedin',
        },
        github: {
            url: 'https://github.com/alce65',
            title: 'GitHub',
            icon: 'fa-brands fa-github',
        },
    };

    const template = html`
        <footer>
            <address>
                <span>
                    <a href=${linksCollection.cas.url} target="_blank"
                        >${linksCollection.cas.title}</a
                    >
                </span>
                <span>
                    <a href=${linksCollection.cfdsb.url} target="_blank"
                        >${linksCollection.cfdsb.title}</a
                    >
                </span>
                <span>${linksCollection.cfdsb.address[0]}</span>
                <span>${linksCollection.cfdsb.address[1]}</span>
                <span>${linksCollection.cfdsb.address[2]}</span>
            </address>
            <p>
                Diseño aplicado a partir de la
                <a href="./guide.html">Guía de Estilo</a>
            </p>
            <p>
                <small
                    >© 2024 -
                    <a href="mailto:alce65@hotmail.es"
                        >Alejandro Cerezo</a
                    ></small
                >
            </p>
            <nav class="inline">
                <ul>
                    <li class="menu-tablet">
                        <a
                            href=${linksCollection.linkedin.url}
                            title="${linksCollection.linkedin.title}"
                            target="_blank"
                        >
                            <i
                                class="fa-brands ${linksCollection.linkedin
                                    .icon}"
                                aria-hidden="true"
                            ></i>
                        </a>
                    </li>
                    <li class="menu-tablet">
                        <a
                            href=${linksCollection.github.url}
                            title="${linksCollection.github.title}"
                            target="_blank"
                        >
                            <i
                                class="fa-brands ${linksCollection.github.icon}"
                                aria-hidden="true"
                            ></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    `;
    return template;
}
