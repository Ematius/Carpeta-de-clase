
export function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = /*html*/ `
        <p>&copy; 2023 Pet App</p>
    `;
    document.body.appendChild(footer);
}
