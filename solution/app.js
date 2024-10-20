console.log("Hello world!")

/**
 * Grabs the numbers and operations from document, performs the calculation,
 * and alerts the user of the result. If any of the inputs are empty, it will
 * alert the user to complete the form instead.
 */
function calculate() {
    let n1 = getNumberInput("num1-input");
    let n2 = getNumberInput("num2-input");
    let op = document.getElementById("op-select").value;
    updateNotifications(n1, n2);

    if (n1 !== null && n2 !== null) {
        const res = getResult(n1, n2, op);
        document.getElementById(`result-text`).innerText = `The result is ${res}`;
    }
}

/**
 * Called whenever its button is clicked! This function
 * should reset all form inputs.
 */
function reset() {
    document.getElementById(`num1-input`).value = "";
    document.getElementById(`num1-input`).className = "form-control";
    document.getElementById(`num1-error-text`).innerText = "";

    document.getElementById(`num2-input`).value = "";
    document.getElementById(`num2-input`).className = "form-control";
    document.getElementById(`num2-error-text`).innerText = "";

    document.getElementById(`op-select`).value = "Add";

    document.getElementById(`result-text`).innerText = "";
}

/**
 * Gets the number of an input if it exists, otherwise returns null
 * @param {string} name the ID of the HTML element
 * @returns {number || null} the input as a number, or null if empty
 */
function getNumberInput(name) {
    const val = document.getElementById(name).value;
    if (val === '') {
        return null;
    } else {
        return parseFloat(val);
    }
}

/**
 * Notifies the user which, if any, of the input fields are missing.
 * @param {string || null} n1 the first input field value
 * @param {string || null} n2 the second input field value
 * @returns {undefined} does not have a return
 */
function updateNotifications(n1, n2) {
    if(n1 === null) {
        updateNotification("num1", true);
    } else {
        updateNotification("num1", false);
    }

    if(n2 === null) {
        updateNotification("num2", true);
    } else {
        updateNotification("num2", false);
    }
}

function updateNotification(id, wasMissing) {
    const errorTextNode = document.getElementById(`${id}-error-text`);
    const inputNode = document.getElementById(`${id}-input`);

    if (wasMissing) {
        // Ask the user to fill out the fields
        inputNode.className = "form-control is-invalid";
        errorTextNode.innerText = "Please enter a number.";
        errorTextNode.style.color = "red";
    } else {
        // Reset any warning messages
        inputNode.className = "form-control";
        errorTextNode.innerText = "";
    }
}

/**
 * Returns the result of x and y based on the operation
 * @param {number} x The first operand
 * @param {number} y The second operand
 * @param {string} operation The operator
 * @returns {number} the result
 */
function getResult(x, y, operation) {
    let result;
    if (operation === "Add") {
        result = x + y;
    } else if (operation === "Subtract") {
        result = x - y;
    } else if (operation === "Multiply") {
        result = x * y;
    } else if (operation === "Divide") {
        result = x / y;
    } else {
        result = 0; // This should never happen!
    }
    return result;
}
