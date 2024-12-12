export function createHeader(title) {
    const headerTemplate = `
  <header class="main-header">
    <img src="./assets/logo-brown-bisque.svg" width="50" alt="Logo">
    <h1 id="header1" data-id="1">${title}</h1>
  </header>
`;
    return headerTemplate;
}

export function createHeader_brown(title) {
    const headerTemplate = `
  <header class="main-header header-brown">
    <img src="./assets/logo-golden-bisque.svg" width="50" alt="Logo">
    <h1 id="header1" data-id="1">${title}</h1>
  </header>
`;
    return headerTemplate;
}
