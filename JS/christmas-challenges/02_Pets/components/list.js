

export function createMainList(pet){
    const body = document.querySelector('body');
    const main = document.createElement('section');

    main.innerHTML = `
        <div>
            <ul id="lista-mascotas">
            <li>Nombre: ${pet.name} </li>
            <li>Raza: ${pet.species} </li>
            <li>Adoptado: ${pet.isAdopted} </li>
            <li>Dueño/a adoptiva/o: ${pet.owner} </li>

            </ul>
        </div>
    `;
    body.appendChild(main);
}


async function getPetList(){
    try{
        const response = await fetch('db.json');
        const data = await response.json();
        data.pets.forEach(pet => {
            createMainList(pet);
            
        });
    }
    catch(error){
        console.error('Error:', error);
    }


}
getPetList();