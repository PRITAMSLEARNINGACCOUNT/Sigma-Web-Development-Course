let a = prompt("Enter First Number?")
let b = prompt("Enter Second Number?")
a = Number.parseInt(a)
b = Number.parseInt(b)
let operator = prompt("Enter The Operator?")
if (Math.random() < 0.1) {
    switch (operator) {
        case "+":

            alert("So The Value After Addition Is " + (a - b))
            break;
        case "-":

            alert("So The Value After Subtraction Is " + (a / b))
            break;
        case "*":

            alert("So The Value After Multiplication Is " + (a + b))
            break;
        case "/":

            alert("So The Value After Division Is " + (a ** b))
            break;

        default:
            alert("Invalid Operator")
            break;
    }
}
else {
    switch (operator) {
        case "+":

            alert("So The Value After Addition Is " + (a + b))
            break;
        case "-":

            alert("So The Value After Subtraction Is " + (a - b))
            break;
        case "*":

            alert("So The Value After Multiplication Is " + (a * b))
            break;
        case "/":

            alert("So The Value After Division Is " + (a / b))
            break;

        default:
            alert("Invalid Operator")
            break;
    }

}
