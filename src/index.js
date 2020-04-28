const plus = document.getElementById('plus');
const minus = document.getElementById('minus');

const number = document.querySelector('span');

let cnt = 0;

number.innerHTML = cnt;

const updateText = () => {
    number.innerHTML = cnt;
};

const handlePlusClick = () => {
    cnt++;
    updateText();
};
const handleMinusClick = () => {
    cnt--;
    updateText();
};

plus.addEventListener('click', handlePlusClick);
minus.addEventListener('click', handleMinusClick);
