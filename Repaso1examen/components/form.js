import { render } from "./render.js";

export function form(){
    const selector = 'body';
    const position = 'beforeend';
    const template = /*html*/ `
    <main class="hero">
        <form method="post" class="form">
            <fieldset>
                <legend>Personaje personalizado</legend>
                <label> Nombre:
                    <input  class= "names" type="text" placeholder="nombre" required>
                </label>
                <label>Fuerza Ki base:
                    <input class="ki" type="number" placeholder="Tu Fuerza Ki" required>
                </label>
                <label>Planeta de origen:
                    <input class="planeta" type="text" placeholder="Tu planeta" required>
                </label>
                <button type="submit">crear personaje</button>
            </fieldset>
            <fieldset>
                <legend>Datos personales</legend>
                <label for="nombre">Nombre:</label>
                <input type="text" name="nombre" id="nombre" >
                <label for="apellidos">Apellidos:</label>
                <input type="text" name="apellidos" id="apellidos" >
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" >
                <label for="telefono">Teléfono:</label>
                <input type="tel" name="telefono" id="telefono" >
                <label for="fecha">Fecha de nacimiento:</label>
                <input type="date" name="fecha" id="fecha" >
                <label for="sexo">Sexo:</label>
                <select name="sexo" id="sexo" >
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                    <option value="otro">Otro</option>
                    <option value="Frikazo">Frikazo</option>
                </select>

                <label for="intereses">Intereses:</label>
                <input type="checkbox" class="intereses" id="intereses" value="ver anime">Ver anime
                <input type="checkbox" class="intereses" id="intereses" value="programar">Programar
                <input type="checkbox" class="intereses" id="intereses" value="procrastinar">Procrastinar
                <input type="checkbox" class="intereses" id="intereses" value="viajes">Viajes
                <input type="checkbox" class="intereses" id="intereses" value="lectura manga">Lectura manga
                <input type="checkbox" class="intereses" id="intereses" value="otros">Otros si es que hay

                <label for="comentarios">Comentarios:</label>
                <textarea name="comentarios" id="comentarios" cols="30" rows="10"></textarea>
                <input type="submit" value="Enviar">

            </fieldset>

        </form>
        <div class="personalCharacter"></div>
    </main>
`;
        
    render(selector, position, template);
}

export function createCharacter(){
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const names = document.querySelector('.names').value;
        const ki = document.querySelector('.ki').value;
        const originPlanet = document.querySelector('.planeta').value;
        const character = {
            names,
            ki,
            originPlanet,
        };
        console.log(character);

        const selector = '.personalCharacter';
        const position = 'beforeend';
        const template = /*html*/ `
        <article class="character">
            <h2>Nombre: ${character.names}</h2>
            <p>Fuerza Ki: ${character.ki}</p>
            <p>Planeta de origen: ${character.originPlanet}</p>
        </article>`;
        render(selector, position, template);
        form.reset();
    });

}

