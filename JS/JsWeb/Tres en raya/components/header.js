export function createHeader(title) {
    const headerTemplate = `
  <header class="main-header">
    <img src="./favicon.svg" width="50" alt="Logo">
    <h1 id="header1" data-id="1">${title}</h1>
  </header>
`;
    return headerTemplate;
}
