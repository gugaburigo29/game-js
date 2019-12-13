class Screen {
    constructor({context, state}) {
        this.state = state;
        this.context = context;
    }

    renderScreen() {
        this.context.fillStyle = 'white';
        this.context.fillRect(0, 0, 10, 10);

        for (let playerId in this.state.players) {
            const player = this.state.players[playerId];
            this.context.fillStyle = 'black';
            this.context.fillRect(player.x, player.y, 1, 1)
        }

        for (let fuitId in this.state.fruits) {
            const fruit = this.state.fruits[fuitId];
            this.context.fillStyle = 'green';
            this.context.fillRect(fruit.x, fruit.y, 1, 1)
        }

        requestAnimationFrame(this.renderScreen.bind(this))
    }
}

export {Screen}