import minstore from '../main';

const store = minstore({
    count: 0
});

const counter = document.querySelector('#counter');

store.subscribe((state) => {
    counter.innerHTML = state.count;
});

function increment() {
    setTimeout(() => {
        store.setState({
            count: store.getState().count + 1
        });
        increment();
    }, 1000);
}

increment();

