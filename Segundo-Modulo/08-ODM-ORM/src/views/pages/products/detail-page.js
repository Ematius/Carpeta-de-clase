import { BasePage } from '../base-page.js';
import createDebug from 'debug';
const debug = createDebug('demo:views:detail-page');
debug('Loaded module');
const html = String.raw;
export class DetailPage extends BasePage {
    title;
    constructor(title = 'Animals | Demo Products') {
        super(title);
        this.title = title;
    }
    renderItem = (item) => {
        return html `
            <article>
                <h3 class="h4"><i>(${item.sciName})</i></h3>
                <p>
                    <img src="${item.image}" alt="${item.name}" />
                </p>
                <p><strong>Inglés:</strong> ${item.englishName}</p>
                <p><strong>Dieta:</strong> ${item.diet}</p>
                <p><strong>Estilo de vida:</strong> ${item.lifestyle}</p>
                <p><strong>Localización:</strong> ${item.location}</p>
                <p><strong>Lema:</strong> ${item.slogan}</p>
            </article>
        `;
    };
    renderMain({ mainTitle, mainContent }) {
        debug('Iniciando renderMain');
        return html `
            <main>
                <section>
                    <a href="/products">
                        <h2 class="h3">${mainTitle}</h2>
                    </a>
                    <div>${this.renderItem(mainContent)}</div>
                </section>
            </main>
        `;
    }
    render(info) {
        debug('Iniciando render');
        if (!info)
            return super.render();
        info.mainTitle = info.mainContent?.name;
        info.mainContent = info.mainContent;
        return super.render(info);
    }
}
