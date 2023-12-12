// function submit() {
    // JavaScript code to create a new text entry
    // var textEntriesContainer = document.getElementById('text-entries-container');
    // var newTextEntry = document.createElement('input');
    // newTextEntry.type = 'text';
    // textEntriesContainer.appendChild(newTextEntry);
// }

function fee() {
    // Get the input element by its ID
    var numberInput = document.getElementById('numberInput');

    // Get the value entered by the user
    var inputValue = numberInput.value;

    // Display the value in a paragraph element
    var displayResult = document.getElementById('displayResult');
    displayResult.textContent = 'Your fee is: $' + inputValue;
}
