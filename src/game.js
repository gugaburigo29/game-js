function createGame() {
    const state = {
        players: {},
        fruits: {}
    };

    function removeFruit(command) {
        const {fruitId} = command;

        delete state.fruits[fruitId];
    }

    function addFruit(command) {
        const {fruitId, fruitX: x, fruitY: y} = command;

        state.fruits[fruitId] = {x, y}
    }

    function removePlayer(command) {
        const {playerId} = command;

        delete state.players[playerId];
    }

    function addPlayer(command) {
        const {playerId, playerX: x, playerY: y} = command;

        state.players[playerId] = {x, y}
    }

    function movePlayer(command) {
        const moveTypes = {
            ArrowUp(player) {
                if (player.y - 1 >= 0) {
                    player.y = player.y - 1;
                }
            },
            ArrowDown(player) {
                if (player.y + 1 < screen.height) {
                    player.y = player.y + 1;
                }
            },
            ArrowLeft(player) {
                if (player.x - 1 >= 0) {
                    player.x = player.x - 1;
                }
            },
            ArrowRight(player) {
                if (player.x + 1 < screen.width) {
                    player.x = player.x + 1;
                }
            }
        };

        const {keyPressed, playerId} = command;
        const PLAYER_ATUAL = state.players[playerId];
        const moveFunction = moveTypes[keyPressed];

        if (PLAYER_ATUAL && moveFunction) {
            moveFunction(PLAYER_ATUAL);
            checkFruitCollition(playerId);
        }
    }

    function checkFruitCollition(playerId) {
        const player = state.players[playerId];

        for (const fruitId in state.fruits) {
            const fruit = state.fruits[fruitId];

            if (player.x === fruit.x && player.y === fruit.y) {
                console.log('colision');
                removeFruit({fruitId})
            }
        }
    }

    return {
        movePlayer,
        addPlayer,
        removePlayer,
        addFruit,
        removeFruit,
        state
    }
}

export {createGame}