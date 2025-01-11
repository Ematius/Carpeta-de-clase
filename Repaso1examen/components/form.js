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
                    <input type="text" placeholder="nombre" required>
                </label>
                <label>Fuerza Ki base:
                    <input type="number" placeholder="Tu Fuerza Ki" required>
                </label>
                <label>Planeta de origen:
                    <input type="text" placeholder="Tu planeta" required>
                </label>
            </fieldset>
            <fieldset>
                <legend>Datos personales</legend>
                <label for="nombre">Nombre:</label>
                <input type="text" name="nombre" id="nombre" required>
                <label for="apellidos">Apellidos:</label>
                <input type="text" name="apellidos" id="apellidos" required>
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" required>
                <label for="telefono">Teléfono:</label>
                <input type="tel" name="telefono" id="telefono" required>
                <label for="fecha">Fecha de nacimiento:</label>
                <input type="date" name="fecha" id="fecha" required>
                <label for="sexo">Sexo:</label>
                <select name="sexo" id="sexo" required>
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
    </main>
`;
        
    render(selector, position, template);
}