export function tttGame() {
    const players = [
        {
            firstName: 'Pepe',
            surName: '',
            alias: 'Pepin',
            icon: '😎',
            positions: '',
        },
        {
            firstName: 'Ernestina',
            surName: '',
            alias: '',
            icon: '👺',
            positions: '',
        },
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
    }

    const boardElement = document.querySelector('.board');
    // Alternativa: acceder a cada casilla
    // const boardElements = document.querySelectorAll('.board div');

    function playTurn(position, playerIndex) {
        ddElements.forEach((item) => {
            item.classList.remove('current-player');
        });
        ddElements[playerIndex].classList.add('current-player');

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

        boardElement.children[position - 1].innerHTML =
            players[playerIndex].icon;

        players[playerIndex].positions += position;
    }

    // Jugar simulado

    function simulateGame() {
        // Posiciones de 1 a 9
        const delay = 1000;
        setTimeout(() => {
            // Empieza Pepe
            playTurn(5, 0);
            setTimeout(() => {
                // Juega Ernestina (error)
                playTurn(5, 1);
                setTimeout(() => {
                    // Juega Ernestina bien
                    playTurn(4, 1);
                    setTimeout(() => {
                        // Juega Pepe
                        playTurn(3, 0);
                        setTimeout(() => {
                            // Juega Ernestina
                            playTurn(7, 1);
                            setTimeout(() => {
                                // Juega Pepe
                                playTurn(1, 0);

                                setTimeout(() => {
                                    // Juega Ernestina
                                    playTurn(2, 1);

                                    setTimeout(() => {
                                        // Juega Pepe
                                        playTurn(9, 0);
                                        console.log(players);
                                    }, delay);
                                }, delay);
                            }, delay);
                        }, delay);
                    }, delay);
                }, delay);
            }, delay);
        }, delay);
    }

    function clearGame() {
        [...boardElement.children].forEach((item) => {
            item.textContent = '';
        });
    }

    function handleButtonClick(event) {
        console.log('click', event);
        console.dir(event.target);
        const id = +event.target.dataset.id;
        console.log(id);

        if (id === 0) {
            simulateGame();
        } else {
            clearGame();
        }

        // const functions = [simulateGame, clearGame];
        // functions[id]();
    }

    document.querySelectorAll('.ttt button').forEach((button) => {
        button.addEventListener('click', handleButtonClick);
    });
}

// TODO

// Algoritmia
// Comprobar si ya hay 3 piezas de un jugador
// Permitir movimientos solo a las casillas vacías y cercanas
// Comprobar si un jugador ganó
// Mostrar un mensaje de victoria

function checkWinner(value) {
    const winnerSeries = ['123', '456', '789', '147', '258', '369', '159', '357'];
    const result = winnerSeries.some((series) => series.split('').every((digit) => value.includes(digit)))
    return result
}

let option = '1248'; // false
let option1 = '1247'; // true
let option2 = '2358'; // true
let option3 = '73923';//true
let option4 = '12453';//false
console.log(checkWinner(option));
console.log(checkWinner(option1));
console.log(checkWinner(option2));
console.log(checkWinner(option3));
console.log(checkWinner(option4));

// Interacción con el usuario
// Permitir a los jugadores introducir su nombre
// Permitir a los jugadores introducir su icono
// Permitir a los jugadores introducir su alias
// Permitir a los jugadores indicar una posición

// IA
// Crear una IA que juegue automáticamente
