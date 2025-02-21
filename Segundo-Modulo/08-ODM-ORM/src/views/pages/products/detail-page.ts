import type { Animal } from '../../../models/animal.type';
import { BasePage } from '../base-page.js';
import createDebug from 'debug';

const debug = createDebug('demo:views:detail-page');
debug('Loaded module');

const html = String.raw;

type PageContent = {
    mainTitle: string;
    mainContent: Animal;
};

export class DetailPage extends BasePage {
    constructor(protected title = 'Animals | Demo Products') {
        super(title);
    }

    private renderItem = (item: Animal) => {
        return html`
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

    override renderMain({ mainTitle, mainContent }: PageContent) {
        debug('Iniciando renderMain');
        return html`
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

    override render(info?: Partial<PageContent>) {
        debug('Iniciando render');
        if (!info) return super.render();
        info.mainTitle = info.mainContent?.name;
        info.mainContent = info.mainContent as Animal;
        return super.render(info);
    }
}
