import { renderHeader } from '../partials/header.js';
import { renderHead } from '../partials/head.js';
import { renderFooter } from '../partials/footer.js';
import { renderDialogNav } from '../partials/dialog-nav.js';
import createDebug from 'debug';
const debug = createDebug('demo:views:base-page');
debug('Loaded module');
const html = String.raw;
export class BasePage {
    title;
    pageTitle;
    constructor(title = '?? | Demo Products', pageTitle = 'Products') {
        this.title = title;
        this.pageTitle = pageTitle;
    }
    renderMain({ mainTitle, mainContent }) {
        debug('Iniciando renderMain');
        return html `
            <main>
                <section>
                    <h2 class="h3">${mainTitle}</h2>
                    <p>${mainContent}</p>
                </section>
            </main>
        `;
    }
    render(info) {
        debug('Iniciando render');
        const pageContent = {
            mainTitle: info?.mainTitle || 'Section title',
            mainContent: info?.mainContent || 'Section info',
        };
        let page = html `
            <!DOCTYPE html>
            <html lang="en">
                ${renderHead(this.title)}
                <body>
                    ${renderHeader(this.pageTitle)} ${renderDialogNav()}
                    ${this.renderMain(pageContent)} ${renderFooter()}
                </body>
            </html>
        `;
        if (info?.script) {
            const add = html `<script src="${info.script}" defer></script>`;
            page = page.replace('</head>', `${add}</head>`);
        }
        return page;
    }
}
