import { createHeader } from '../components/header.js';
import { getTasks } from '../services.js';
import { createTaskCards } from './components/task-cards.js';

export async function loadTasks() {
    console.log('loaded tasks');
    const pageTitle = 'Tareas';
    createHeader(pageTitle);
    try {
        const tasks = await getTasks();
        console.log(tasks);
        createTaskCards(tasks, '.cards-container');
    } catch (error) {
        console.log(error.message);
    }
}
