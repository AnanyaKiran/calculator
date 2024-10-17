// Get references to the display and history elements
const display = document.getElementById('display');
const historyList = document.getElementById('history-list');

// Load history from local storage when the page loads
window.onload = function() {
    loadHistory();
}

// Append to the display when a button is clicked
function appendToDisplay(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Calculate the result and store in local storage
function calculate() {
    try {
        const result = eval(display.value); // Calculate the result
        const calculation = `${display.value} = ${result}`;
        
        // Add result to display
        display.value = result;

        // Save to local storage
        saveToLocalStorage(calculation);
        
        // Add to the history list
        addToHistory(calculation);
    } catch (error) {
        display.value = 'Error';
    }
}

// Save a calculation to local storage
function saveToLocalStorage(calculation) {
    let history = JSON.parse(localStorage.getItem('calcHistory')) || [];
    history.push(calculation);
    localStorage.setItem('calcHistory', JSON.stringify(history));
}

// Load history from local storage
function loadHistory() {
    const history = JSON.parse(localStorage.getItem('calcHistory')) || [];
    history.forEach(calculation => {
        addToHistory(calculation);
    });
}

// Add a calculation to the history list
function addToHistory(calculation) {
    const li = document.createElement('li');
    li.textContent = calculation;
    historyList.appendChild(li);
}
