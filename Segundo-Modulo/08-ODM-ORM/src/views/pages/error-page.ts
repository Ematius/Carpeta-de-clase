import { BasePage } from './base-page.js';
import createDebug from 'debug';
const debug = createDebug('demo:views:error-page');
debug('Loaded module');

export class ErrorPage extends BasePage {
    constructor(protected title = 'Error | Demo Products') {
        super(title);
    }

    override render(info?: Record<string, unknown>) {
        debug('Iniciando render');
        info = {
            mainTitle: 'Página de error',
            mainContent: info?.errorMessage || 'Error desconocido',
        };

        return super.render(info);
    }
}
