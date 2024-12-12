export function createHeader(title, isBrown = true) {
    let img = '';
    let cssClass = 'main-header';
    if (isBrown) {
        img = './assets/logo-golden-bisque.svg';
        cssClass += ' header-brown';
    } else {
        img = './assets/logo-brown-bisque.svg';
    }

    const headerTemplate = `
    <header class="${cssClass}">
        <img src=${img} width="50" alt="Logo">
        <h1 id="header1" data-id="1">${title}</h1>
    </header>
    `;
    return headerTemplate;
}
