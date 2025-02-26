/* Importamos la función createDebug del paquete 'debug'. 
   Esta función permite crear un logger de depuración con un nombre de espacio específico. */
import createDebug from 'debug';

/* Importamos el tipo 'Server' desde el módulo nativo 'node:http'. 
   Esto nos permite tipar correctamente el parámetro 'server' que la función recibirá. */
import { Server } from 'node:http';

/* Creamos una función de depuración llamada 'debug' usando createDebug, con el namespace 'films:server:listening'. 
   Esta función logueará mensajes de depuración solo si la variable de entorno DEBUG incluye este namespace. */
const debug = createDebug('films:server:listening');

/* Exportamos la función 'listenManager', que recibe un objeto 'server' de tipo Server.
   Esta función se encargará de gestionar el evento de "escucha" (listening) del servidor, mostrando la dirección de enlace. */
export const listenManager = (server: Server) => {
    /* Obtenemos la dirección donde el servidor está escuchando mediante server.address().
       Puede retornar un objeto con información {address, family, port} si es un socket TCP,
       una cadena (string) si es un pipe o socket Unix,
       o null si el servidor aún no está escuchando&#8203;:contentReference[oaicite:0]{index=0}&#8203;:contentReference[oaicite:1]{index=1}. */
    const addr = server.address();

    /* Si no hay dirección (addr es null), significa que el servidor no está actualmente escuchando.
       En ese caso, terminamos la ejecución de la función (no hay nada que mostrar). */
    if (addr === null) return;

    /* Declaramos una variable 'bind' de tipo string.
       Aquí construiremos una cadena que representa la dirección y puerto en la que el servidor está escuchando. */
    let bind: string;

    /* Verificamos si 'addr' es de tipo string. 
       Esto ocurre si el servidor está escuchando en un pipe de IPC o en un socket Unix, 
       en cuyo caso 'addr' contendrá la ruta/nombre de ese pipe. */
    if (typeof addr === 'string') {
        /* Si la dirección es un string, asumimos que es un pipe.
           Construimos la cadena 'bind' indicando que es un pipe, concatenando la palabra 'pipe ' con el nombre. */
        bind = 'pipe ' + addr;
    } else {
        /* Si 'addr' no es un string, entonces es un objeto con propiedades como 'address' y 'port'.
           Esto sucede cuando el servidor escucha en una interfaz de red (TCP). */
        bind =
            addr.address === '::'
                ? `http://localhost:${addr?.port}`
                : `${addr.address}:${addr?.port}`;
        /* En la línea anterior usamos un operador ternario para asignar 'bind':
           - Si addr.address es '::', significa que el servidor está escuchando en todas las interfaces IPv6 (dirección indefinida)&#8203;:contentReference[oaicite:2]{index=2}.
             En ese caso, usamos 'http://localhost:' seguido del puerto para formar una URL más amigable en lugar de '::'.
           - Si addr.address no es '::', usamos la dirección IP específica y el puerto, formateándolos como "IP:puerto". */
    }

    /* Finalmente, mostramos el mensaje de que el servidor está escuchando.
       Verificamos la variable de entorno DEBUG para decidir el método de logging:
       - Si DEBUG **no** está definida (modo normal), usamos console.log para imprimir un mensaje estándar en inglés.
       - Si DEBUG está definida (modo depuración activado), usamos la función 'debug' para registrar el mensaje en español.
         La librería 'debug' funciona como un console.log mejorado que está apagado por defecto y se activa con la variable DEBUG&#8203;:contentReference[oaicite:3]{index=3}. */
    if (!process.env.DEBUG) {
        console.log(`Server listening on ${bind}`);
    } else {
        debug(`Servidor escuchando en ${bind}`);
    }
};
