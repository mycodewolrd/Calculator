let display = document.getElementById("display");

// Append value to display
const appendValue = (value) => {
    display.value += value;
};

// Clear display
const clearDisplay = () => {
    display.value = "";
};

// Delete last character
const deleteLast = () => {
    display.value = display.value.slice(0, -1);
};

// Calculate result
const calculateResult = () => {
    try {
        // Convert percentage to decimal before calculation
        display.value = display.value.replace(/(\d+(\.\d+)?)%/g, '(($1)/100)');
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
};

// Event listener for buttons
document.querySelector(".buttons").addEventListener("click", (event) => {
    const { value } = event.target.dataset;
    if (!value) return; // Ignore clicks outside buttons
    if (value === "AC") return clearDisplay();
    if (value === "DEL") return deleteLast();
    if (value === "=") return calculateResult();

    appendValue(value);
    saveCalculation();
});