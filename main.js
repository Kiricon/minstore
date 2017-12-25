class store {

    constructor(state) {
        this.state = state || {};
        this._subscriptions = [];
    }

    getState() {
        return this.state;
    }

    subscribe(fn) {
        this._subscriptions.push(fn);
    }

    setState(newState) {
        const oldState = this.state;

        // Replace the two for loops with spread operator in the future
        let tempState = {};
        for(let prop in this.state) {
            tempState[prop] = this.state[prop];
        }

        for(let prop in newState) {
            tempState[prop] = newState[prop];
        }

        this.state = tempState;
        this._callSubcriptions(oldState);
    }

    _callSubcriptions(oldState) {
        for(let i = 0; i < this._subscriptions.length; i++) {
            this._subscriptions[i](this.state, oldState);
        }
    }
}

export default function CreateStore(defaultState) {
    return new store(defaultState);
}