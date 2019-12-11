class KeyBoardListener {
    constructor() {
        this.observers = [];
    }

    subscribe(observedFunction) {
        this.observers.push(observedFunction);
    }

    notifyAll(command) {
        for (const observedFunction of this.observers) {
            observedFunction(command)
        }
    }

    static create() {
        return new KeyBoardListener();
    }
}

export {KeyBoardListener}