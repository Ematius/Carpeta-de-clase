import { BasePage } from './base-page.js';
import createDebug from 'debug';

const debug = createDebug('demo:views:home-page');
debug('Loaded module');

const html = String.raw;

type PageContent = {
    mainTitle: string;
    mainContent: string;
};

export class HomePage extends BasePage {
    constructor(protected title = 'Inicio | Demo Products') {
        super(title);
    }

    override renderMain({ mainTitle, mainContent }: PageContent) {
        debug('Iniciando renderMain');
        return html`
            <main>
                <section class="products">
                    <header>
                        <h2 class="h3">${mainTitle}</h2>
                    </header>
                    <p>${mainContent}</p>
                    <p>
                        Demo del uso de NodeJS como servidor de distintos tipos
                        de páginas
                    </p>
                    <div class="info-wrapper">
                        <ul>
                            <li>
                                <b>About</b>: página estática (SSG: Static Site
                                Generation)
                            </li>
                            <li>
                                <b>Home</b>: página casi estática (Se construye
                                a partir de partials)<br />
                                (SSR: Server Side Rendering básico)
                            </li>
                            <li>
                                <b>Products</b>: página dinámica (SSR: Server
                                Side Rendering)
                            </li>
                            <li>
                                <b>GoT</b>: página creada con Astro y publicada
                                en Node<br />
                                (SSG: Static Site Generation)
                            </li>
                        </ul>
                    </div>
                    <div>
                        <a href="/got"><button>Games of Thrones</button></a>
                        <span> - </span>
                        Accede a la pagina publicada en este servidor
                    </div>
                </section>
            </main>
        `;
    }

    override render() {
        debug('Iniciando render');
        const info = {
            mainTitle: 'Página de inicio',
            mainContent: 'Bienvenido a la página de inicio',
        };

        return super.render(info);
    }
}
