export function tttGame() {
    const players = [
        { firstName: 'Pepe', surName: '', alias: 'Pepin', icon: '😎' },
        { firstName: 'Ernestina', surName: '', alias: '', icon: '👺' },
    ];

    const ddElements = document.querySelectorAll('.players dd');

    for (let i = 0; i < ddElements.length; i++) {
        const item = ddElements[i];
        // item.textContent = players[i].alias
        //     ? players[i].alias
        //     : players[i].firstName;

        const text = `<b>${players[i].alias || players[i].firstName}</b>`;

        // item.textContent = text;
        item.innerHTML = text;
        item.insertAdjacentHTML('',text)
    }

    function playTurn(position, player) {
        const boardElement = document.querySelector('.board');
        // Alternativa: acceder a cada casilla
        // const boardElements = document.querySelectorAll('.board div');
        const infoElement = document.querySelector('dialog.info');
        // console.dir(boardElement.children[0]);
        // console.dir(boardElements[0]);

        if (boardElement.children[position - 1].textContent) {
            infoElement.textContent = 'Movimiento inválido';
            infoElement.showModal();
            setTimeout(function () {
                infoElement.textContent = '';
                infoElement.close();
            }, 500);
            return;
        }

        boardElement.children[position - 1].innerHTML = player.icon;
 
    }

    // Jugar simulado

    function simulateGame() {
        // Posiciones de 1 a 9
        const delay = 1000;
        setTimeout(() => {
            // Empieza Pepe
            playTurn(5, players[0]);
            setTimeout(() => {
                // Juega Ernestina (error)
                playTurn(5, players[1]);
                setTimeout(() => {
                    // Juega Ernestina bien
                    playTurn(4, players[1]);
                    setTimeout(() => {
                        // Juega Pepe
                        playTurn(3, players[0]);
                        setTimeout(() => {
                            // Juega Ernestina
                            playTurn(7, players[1]);
                            setTimeout(() => {
                                // Juega Pepe
                                playTurn(1, players[0]);

                                setTimeout(() => {
                                    // Juega Ernestina
                                    playTurn(2, players[1]);

                                    setTimeout(() => {
                                        // Juega Pepe
                                        playTurn(9, players[0]);
                                    }, delay);
                                }, delay);
                            }, delay);
                        }, delay);
                    }, delay);
                }, delay);
            }, delay);
        }, delay);
    }

    simulateGame();
}

// TODO

// Modificar atributos de un elemento
// Botón x disable / enable

// Añadir / eliminar clases
// e..g. para cambiar el color del jugador activo

// Algoritmia
// Comprobar si ya hay 3 piezas de un jugador
// Permitir movimientos solo a las casillas vacías y cercanas
// Comprobar si un jugador ganó
// Mostrar un mensaje de victoria

// Interacción con el usuario
// Permitir a los jugadores introducir su nombre
// Permitir a los jugadores introducir su icono
// Permitir a los jugadores introducir su alias
// Permitir a los jugadores indicar una posición

// IA
// Crear una IA que juegue automáticamente
