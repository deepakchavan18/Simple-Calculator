function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;
    var result;
    if (num1===NaN & num2===NaN) {
        window.alert("Enter Input")
    }else
    {
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':``
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if(num2 !== 0){
                    result = num1 / num2;
                } else {
                    result = "Cannot divide by zero";
                }
                break;
            default:
                result = "Invalid operator";
        }
    
        document.getElementById('result').innerText = "Result: " + result;
    }
    
}
