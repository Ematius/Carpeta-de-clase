import {render} from './render.js'

function createMainList(pet){
    const selector = 'body';
    const position = 'beforeend'
    const template = /*html*/ `
    <main>
        <div>
            <ul class="lista-mascotas">
            <li>Nombre: ${pet.name} </li>
            <li>Raza: ${pet.species} </li>
            <li>Adoptado: ${pet.isAdopted} </li>
            <li>Dueño/a adoptiva/o: ${pet.owner} </li>
            </ul>
        </div>
    </main>    
    `;
    render(selector, position, template)
}


export function addPetForm() {
    const selector = 'body';
    const position = 'beforeend';
    const template = /*html*/ `
    <form class='form'>
        <div class= form-div>
        <input type="text" class="pet-name" placeholder="Nombre" required>
        <input type="text" class="pet-species" placeholder="Raza" required>
        <input type="text" class="pet-owner" placeholder="Dueño/a adoptiva/o" required>
        <button type="submit">Añadir Mascota</button>
        </div>
    </form>    
    `;
    render(selector, position, template);
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.querySelector('.pet-name').value;
        const species = document.querySelector('.pet-species').value;
        const owner = document.querySelector('.pet-owner').value;
        const newPet = {
            name,
            species,
            isAdopted: false,
            owner,
        };

        createMainList(newPet);
        
        form.reset();
    });
}

export async function getPetList(){
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


