import { render } from '../../components/base.js';

export function createAddTask(
    addTask,
    selector = 'body',
    position = 'beforeend'
) {
    const template = /*html*/ `
     <form>
        <label>
          <span>Título</span>
          <input type="text" name="title" required>
        </label>
        <label>
          <span>Responsable</span>
          <input type="text" name="owner">
        </label>
        <button type="submit">Crear</button>
      </form>
    
    `;

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        const newTask = {
            ...data,
            // id: crypto.randomUUID().split('-')[0],
            isDone: false,
        };
        console.log(newTask);
        addTask(newTask);
    }

    const element = render(selector, position, template);
    element.addEventListener('submit', handleSubmit);

    return element;
}
