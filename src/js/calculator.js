// Get the display element
const display = document.getElementById('display');

// Function to clear the display
const clearDisplay = () => {
    display.value = '';
};

// Function to append a value to the display
const appendToDisplay = (value) => {
    display.value += value;
};

// Function to perform the calculation
const calculate = () => {
    try {
        // Use eval to evaluate the expression entered in the display
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
};

// Add event listeners to all buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        // If the clear button is pressed
        if (button.id === 'clear') {
            clearDisplay();
        }
        // If the equals button is pressed
        else if (button.id === 'equals') {
            calculate();
        }
        // Append the value of the button to the display
        else {
            appendToDisplay(value);
        }
    });
});
