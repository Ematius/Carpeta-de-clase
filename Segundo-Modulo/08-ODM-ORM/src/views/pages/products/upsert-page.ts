import type { Animal } from '../../../models/animal.type';
import { BasePage } from '../base-page.js';
import createDebug from 'debug';

const debug = createDebug('demo:views:upsert-products-page');
debug('Loaded module');

const html = String.raw;

type PageContent = {
    mainTitle: string;
    mainContent: Animal | null;
    script?: string;
};

export class UpsertProductsPage extends BasePage {
    constructor(protected title = 'Animals | Demo Products') {
        super(title);
    }

    private renderFormItems = (item: Animal | null) => {
        item = item?.name ? item : null;

        return html`
            <fieldset>
                <label class="input">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder=" "
                        required
                        ${item && `value="${item.name}"`}
                        ${item && 'readonly'}
                    />
                    <span>Nombre:</span>
                </label>
                <label class="input">
                    <input
                        type="text"
                        id="sciName"
                        name="sciName"
                        placeholder=" "
                        ${item && `value="${item.sciName}"`}
                    />
                    <span>Nombre científico:</span>
                </label>
                <label class="input">
                    <input
                        type="text"
                        id="englishName"
                        name="englishName"
                        placeholder=" "
                        ${item && `value="${item.englishName}"`}
                    />
                    <span>Nombre en inglés:</span>
                </label>
                <label class="input">
                    <input
                        type="text"
                        id="group"
                        name="group"
                        placeholder=" "
                        ${item && `value="${item.group}"`}
                    />
                    <span>Grupo (e.g. Mamíferos, Aves...):</span>
                </label>
            </fieldset>
            <fieldset>
                <label class="input">
                    <input
                        type="text"
                        id="image"
                        name="image"
                        placeholder=" "
                        ${item && `value="${item.image}"`}
                        required
                    />
                    <span>Url de la imagen:</span>
                </label>
            </fieldset>
            <fieldset>
                <datalist id="diets">
                    <option value="Carnívoro"></option>
                    <option value="Herbívoro"></option>
                    <option value="Omnívoro"></option>
                </datalist>
                <label class="input">
                    <input
                        type="text"
                        id="diet"
                        name="diet"
                        placeholder=" "
                        list="diets"
                        ${item && `value="${item.diet}"`}
                    />
                    <span>Dieta (Carnívoro, Herbívoro...):</span>
                </label>
                <label class="select">
                    <span>Estilo de vida </span>
                    <select
                        id="lifestyle"
                        name="lifestyle"
                        ${item && `value="${item.lifestyle}"`}
                    >
                        <option></option>
                        <option>Diurno</option>
                        <option>Nocturno</option>
                    </select>
                  </label>
                </label>
                <label class="input">
                    <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder=" "
                        ${item && `value="${item.location}"`}
                    />
                    <span>Localización:</span>
                </label>
                <label class="input">
                    <input
                        type="text"
                        id="slogan"
                        name="slogan"
                        placeholder=" "
                        ${item && `value="${item.slogan}"`}
                    />
                    <span>Lema:</span>
                </label>
            </fieldset>
        `;
    };

    override renderMain({ mainTitle, mainContent }: PageContent) {
        debug('Iniciando renderMain');

        const action = mainContent ? 'update/' + mainContent.id : 'create';
        // const method = 'PUT/PATCH/DELETE' NO ES VÁLIDO EN HTML - se toma como GET;
        const method = 'POST';
        const textButton = mainContent ? 'Actualizar' : 'Crear';
        return html`
            <main>
                <section>
                    <a href="/products">
                        <h2 class="h3">${mainTitle}</h2>
                    </a>
                    <div>
                    <form action="/products/${action}" method="${method}">
                        ${this.renderFormItems(mainContent)}
                        <fieldset>
                            <button type="submit">${textButton}</button>
                        </fieldset>
                    </form>
                </section>
            </main>
        `;
    }

    override render(info?: Partial<PageContent>) {
        debug('Iniciando render');
        if (!info) {
            info = {
                mainTitle: 'Crear un nuevo animal',
                mainContent: null,
            };
        } else {
            info.mainTitle = `Modificar datos del ${info.mainContent?.name}`;
            info.mainContent = info.mainContent as Animal;
            info.script = '/form.js';
        }
        return super.render(info);
    }
}
