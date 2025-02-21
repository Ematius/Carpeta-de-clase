const html = String.raw;

export function renderDialog(content: string) {
    const template = html`
        <dialog>
            <p class="close">
                <button class="fa-solid fa-xmark"></button>
            </p>
            <div class="dialog-content">${content}</div>
        </dialog>
    `;
    return template;
}
