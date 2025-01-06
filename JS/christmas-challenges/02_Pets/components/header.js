
export function createHeader (){
    const header = document.createElement('header');
    header.innerHTML = /*html*/ `
            <h1>
                Orfanato de mascotas
            </h1>
        `;
    document.body.appendChild(header);

}

