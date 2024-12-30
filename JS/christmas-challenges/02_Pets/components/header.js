
export function createHeader (){
    const body = document.querySelector('body');
    const header = document.createElement('header');

    header.innerHTML = `
            <h1>
                Orfanato de mascotas
            </h1>
            <h2>
                Lista de mascotas
            </h2>
        `;
   body.appendChild(header);

}

