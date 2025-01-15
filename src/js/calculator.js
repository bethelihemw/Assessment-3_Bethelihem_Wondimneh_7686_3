
const display = document.getElementById('display');
const clearDisplay = () => {
    display.value = '';
};
const appendToDisplay = (value) => {
    display.value += value;
};
const calculate = () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
};
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (button.id === 'clear') {
            clearDisplay();
        }
        else if (button.id === 'equals') {
            calculate();
        }
        else {
            appendToDisplay(value);
        }
    });
});
