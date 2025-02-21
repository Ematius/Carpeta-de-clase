import type { Animal } from '../../../models/animal.type';
import { renderDialog } from '../../partials/dialog.js';
import { BasePage } from '../base-page.js';
import createDebug from 'debug';

const debug = createDebug('demo:views:products-page');
debug('Loaded module');

const html = String.raw;

type PageContent = {
    mainTitle: string;
    mainContent: Animal[];
    script: string;
};

export class ProductsPage extends BasePage {
    constructor(protected title = 'Animals | Demo Products') {
        super(title);
    }

    private pageScripts = 'confirm.js';

    private dialogContent = () => html`
        <h3>Seguro que deseas eliminar este elemento?</h3>

        <form action="/products/delete/itemName" method="POST">
            <button type="submit">Eliminar</button>
            <button type="button" class="close">Cancelar</button>
        </form>
    `;

    private renderList = (data: Animal[]) => {
        return data
            .map(
                (item) => html`
                    <article>
                        <a href="/products/${item.id}">
                            <h3>${item.name}</h3>
                            <p>
                                <img src="${item.image}" alt="${item.name}" />
                            </p>
                        </a>
                        <div>
                            <a href="/products/update/${item.id}">
                                <button>Editar</button>
                            </a>
                            <button data-name=${item.id}>Eliminar</button>
                        </div>
                    </article>
                `,
            )
            .join(' ');
    };

    override renderMain({ mainTitle, mainContent }: PageContent) {
        debug('Iniciando renderMain');
        return html`
            <main>
                <section class="products">
                    <header>
                        <h2 class="h3">${mainTitle}</h2>
                        <a href="/products/create">
                            <button>Agregar</button>
                        </a>
                    </header>
                    <div class="products-wrapper">
                        ${this.renderList(mainContent)}
                    </div>
                    ${renderDialog(this.dialogContent())}
                </section>
            </main>
        `;
    }

    override render(info?: Partial<PageContent>) {
        debug('Iniciando render');
        if (!info) return super.render();
        info.mainTitle = 'Animals';
        info.mainContent = info.mainContent as Animal[];
        info.script = this.pageScripts;
        return super.render(info);
    }
}
