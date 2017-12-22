import minstore from '../main';

const store = minstore({
    count: 0,
    count2: 0
});

const counter = document.querySelector('#counter');
const counter2 = document.querySelector('#counter2');

store.subscribe((state) => {
    counter.innerHTML = state.count;
    counter2.innerHTML = state.count2;
});

function increment() {
    setTimeout(() => {
        store.setState({
            count: store.getState().count + 1
        });
        increment();
    }, 1000);
}

function increment2() {
    setTimeout(() => {
        store.setState({
            count2: store.getState().count2 + 3
        });
        increment2();
    }, 3000);
}

increment();
increment2();

