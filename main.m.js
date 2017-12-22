var store = function store(state) {
    this.state = state;
    this._subscriptions = [];
};
store.prototype.getState = function getState () {
    return this.state;
};
store.prototype.subscribe = function subscribe (fn) {
    this._subscriptions.push(fn);
};
store.prototype.setState = function setState (newState) {
        var this$1 = this;

    var tempState = {};
    for (var prop in this$1.state) {
        tempState[prop] = this$1.state[prop];
    }
    for (var prop$1 in newState) {
        tempState[prop$1] = newState[prop$1];
    }
    this.state = tempState;
    this._callSubcriptions();
};
store.prototype._callSubcriptions = function _callSubcriptions () {
        var this$1 = this;

    for (var i = 0;i < this._subscriptions.length; i++) {
        this$1._subscriptions[i](this$1.state);
    }
};
function CreateStore(defaultState) {
    return new store(defaultState);
}

export default CreateStore;
//# sourceMappingURL=main.m.js.map
