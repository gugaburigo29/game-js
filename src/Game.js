class Game {
    constructor(players, fruits) {
        this.players = players;
        this.fruits = fruits;
    }

    movePlayer(command) {
        const {keyPressed, playerId} = command;
        const PLAYER_ATUAL = this.players[playerId];

        if (keyPressed === 'ArrowUp' && PLAYER_ATUAL.y - 1 >= 0) {
            PLAYER_ATUAL.y = PLAYER_ATUAL.y - 1;
            return;
        }

        if (keyPressed === 'ArrowDown' && PLAYER_ATUAL.y + 1 < screen.height) {
            PLAYER_ATUAL.y = PLAYER_ATUAL.y + 1;
            return;
        }

        if (keyPressed === 'ArrowRight' && PLAYER_ATUAL.x + 1 < screen.width) {
            PLAYER_ATUAL.x = PLAYER_ATUAL.x + 1;
            return;
        }

        if (keyPressed === 'ArrowLeft' && PLAYER_ATUAL.x - 1 >= 0) {
            PLAYER_ATUAL.x = PLAYER_ATUAL.x - 1;
            return;
        }
    }

    get state() {
        return {
            players: this.players,
            fruits: this.fruits,
        }
    }

    static create({players, fruits}) {
        return new Game(players, fruits)
    }
}

export {Game}