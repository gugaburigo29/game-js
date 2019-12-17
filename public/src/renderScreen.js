function renderScreen(screen, game, requestAnimationFrame) {
    const context = screen.getContext('2d');

    context.fillStyle = 'white';
    context.fillRect(0, 0, 10, 10);

    for (let playerId in game.state.players) {
        const player = game.state.players[playerId];
        context.fillStyle = 'black';
        context.fillRect(player.x, player.y, 1, 1)
    }

    for (let fuitId in game.state.fruits) {
        const fruit = game.state.fruits[fuitId];
        context.fillStyle = 'green';
        context.fillRect(fruit.x, fruit.y, 1, 1)
    }

    requestAnimationFrame(() => renderScreen(screen, game, requestAnimationFrame))
}

export {renderScreen}