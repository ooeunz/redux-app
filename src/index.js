import { createStore } from 'redux';

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const cntModifier = (cnt = 0) => {
    return cnt;
};

const store = createStore(cntModifier);
