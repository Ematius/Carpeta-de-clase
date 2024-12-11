export function tttGame() {
    const players = [
        { firstName: 'Pepe', surName: '', alias: 'Pepin', icon: '😎' },
        { firstName: 'Ernestina', surName: '', alias: '', icon: '👺' },
    ];

    const ddElements = document.querySelectorAll('.ttt dd');

    for (let i = 0; i < ddElements.length; i++) {
        const item = ddElements[i];
        // item.textContent = players[i].alias
        //     ? players[i].alias
        //     : players[i].firstName;

        const text = `<b>${players[i].alias || players[i].firstName}</b>`;

        // item.textContent = text;
        item.innerHTML = text;
    }

    function playTurn(position, player) {
        const boardElement = document.querySelector('.board');
        const boardElements = document.querySelectorAll('.board div'); 
        const infoElement = document.querySelector('dialog.info');
        console.dir(boardElement.children[0]);
        console.dir(boardElements[0]);

        if (boardElement.children[position - 1].textContent) {
            infoElement.textContent = 'Movimiento inválido';
            infoElement.showModal();
            setTimeout(function () {
                infoElement.textContent = '';
                infoElement.close();
            }, 2000);
            return;
        }

        boardElement.children[position - 1].innerHTML = player.icon;
    }

    // Jugar simulado

    // Posiciones de 1 a 9

    // Empieza Pepe
    playTurn(5, players[0]);

    // Juega Ernestina
    playTurn(5, players[1]);
    playTurn(4, players[1]);

    // Empieza Pepe
    playTurn(3, players[0]);

    // Juega Ernestina
    playTurn(7, players[1]);

    // Empieza Pepe
    playTurn(1, players[0]);

    // Juega Ernestina
    playTurn(2, players[1]);

    // Empieza Pepe
    playTurn(9, players[0]);

    // Juega Ernestina
    playTurn(8, players[1]);
}
