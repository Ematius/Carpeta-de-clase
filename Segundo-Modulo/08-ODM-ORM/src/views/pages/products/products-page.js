import { renderDialog } from '../../partials/dialog.js';
import { BasePage } from '../base-page.js';
import createDebug from 'debug';
const debug = createDebug('demo:views:products-page');
debug('Loaded module');
const html = String.raw;
export class ProductsPage extends BasePage {
    title;
    constructor(title = 'Animals | Demo Products') {
        super(title);
        this.title = title;
    }
    pageScripts = 'confirm.js';
    dialogContent = () => html `
        <h3>Seguro que deseas eliminar este elemento?</h3>

        <form action="/products/delete/itemName" method="POST">
            <button type="submit">Eliminar</button>
            <button type="button" class="close">Cancelar</button>
        </form>
    `;
    renderList = (data) => {
        return data
            .map((item) => html `
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
                `)
            .join(' ');
    };
    renderMain({ mainTitle, mainContent }) {
        debug('Iniciando renderMain');
        return html `
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
    render(info) {
        debug('Iniciando render');
        if (!info)
            return super.render();
        info.mainTitle = 'Animals';
        info.mainContent = info.mainContent;
        info.script = this.pageScripts;
        return super.render(info);
    }
}
