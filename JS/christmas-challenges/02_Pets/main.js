
import {createHeader} from './components/header.js';
import {getPetList, addPetForm} from './components/mainList.js';
import {createFooter} from './components/footer.js';


async function initializeApp(){
    createHeader();
    await getPetList();
    addPetForm();
    createFooter();
}
initializeApp();