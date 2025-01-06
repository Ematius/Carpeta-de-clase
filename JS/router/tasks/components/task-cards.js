import { render } from '../../components/base.js';
import { createCard } from './card.js';
import { createAddTask } from './add-task.js';
import { setTask, updateTask, deleteTask } from '../../services.js';

//  id: string,
//  title: string,
//  owner: string,
//  isDone: boolean

export function createTaskCards(
    tasks,
    selector = 'body',
    position = 'beforeend'
) {
    async function deleteCard({ id }) {
        await deleteTask(id);
        // const index = tasks.findIndex((item) => item.id === id);
        //tasks.splice(index, 1);
        tasks.splice(
            tasks.findIndex((item) => item.id === id),
            1
        );
        console.log(tasks);
    }

    async function updateCard(updatedTask) {
        const id = updatedTask.id;
        try {
            const finalTask = await updateTask(id, updatedTask);
            const index = tasks.findIndex((item) => item.id === id);
            tasks[index] = finalTask;
            console.log(tasks);
        } catch (error) {
            console.log(error.message);
        }
    }

    function addCard(task) {
        // task.id = task.id || crypto.randomUUID().split('-')[0];

        setTask(task)
            .then((fullTask) => {
                tasks.push(fullTask);
                console.log(tasks);
                createCard(fullTask, deleteCard, updateCard, 'ul.cards');
            })
            .catch((error) => console.log(error.message));
    }

    function extendedRender() {
        document.querySelector(selector).innerHTML = '';

        const element = render(selector, position, template);
        createAddTask(addCard, 'details');
        tasks.forEach((task) =>
            createCard(task, deleteCard, updateCard, 'ul.cards')
        );
        return element;
    }

    const template = /*html*/ `
    <ul class="cards">
    </ul>
    `;
    const element = extendedRender();
}
