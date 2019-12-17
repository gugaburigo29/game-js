function createKeyBoardListener() {
    const state = {
        observers: []
    };

    function subscribe(observedFunction) {
        state.observers.push(observedFunction);
    }

    function notifyAll(command) {
        for (const observedFunction of state.observers) {
            observedFunction(command)
        }
    }

    document.addEventListener('keydown', handleKeydown);

    function handleKeydown(event) {
        const {key: keyPressed} = event;

        const command = {
            playerId: 'player1',
            keyPressed
        };

        notifyAll(command)
    }

    return {
        subscribe
    }
}

export {createKeyBoardListener}