function incrementNumber() {
    var inputElement = document.getElementById("numberInput");
    var resultElement = document.getElementById("resultSpan");

    var inputValue = parseInt(inputElement.value);
    var resultValue = inputValue + 1;

    resultElement.innerHTML = resultValue;
}
