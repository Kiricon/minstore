# minstore
A minimal store creator for managing and listening to state changes. 


## Install minstore
```
npm i minstore
```


## Use
```Javascript
const minstore = require('minstore');
// or in common js
import minstore from 'minstore';

// Create a store with default values
const store = minstore({
    counter: 0
});

// Every time the state is updated call the method defined in
// the argument and pass in the newely updated state and the old state
store.subscribe((newState, oldState) => {
    if(newState !== oldState) {
        alert(newState.counter);
    }
});

// Update the state fire all subscribed methods
// Note: Set state only updateds the properties of the state
// that are defined in the set state object. All other properties
// retrain their current state.
store.setState({
    counter: store.getState().counter + 1;
});

// getState will return the current state of our store.
alert(store.getState().counter);

```