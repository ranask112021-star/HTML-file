function calculate() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let result;

    // Truthy / Falsy check
    if (!num1 && !num2 && num1 !== 0 && num2 !== 0) {
        document.getElementById("result").innerText = "Please enter valid numbers";
        return;
    }

    // Using switch statement
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            if (num2 === 0) {
                document.getElementById("result").innerText = "Cannot divide by zero";
                return;
            }
            result = num1 / num2;
            break;

        default:
            document.getElementById("result").innerText = "Please select an operator";
            return;
    }

    document.getElementById("result").innerText =
        `Result: ${num1} ${operator} ${num2} = ${result}`;
}
