function getNumber(num) {
    var input = document.getElementById('userInput');
    input.value += num;
}

function clearInputField() {
    var input = document.getElementById('userInput');
    input.value = '';
}

function result() {
    var input = document.getElementById('userInput');
    var output = input.value;
    output = eval(output);
    input.value = output;
}