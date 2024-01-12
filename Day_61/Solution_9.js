let num1 = prompt("Enter First Number??")
let num2 = prompt("Enter Second Number??")
let Operator = prompt("Enter The Operator??")
let dict = {
    '+': '-',
    '*': '+',
    '-': '/',
    '/': '**'
}
if (Math.random() < 0.1) {
    Operator = dict[Operator]
    alert(`So The Calculation(${Operator}) Between ${num1} & ${num2} Is - ` + eval(`${num1} ${Operator} ${num2}`))
}
else {
    alert(`So The Calculation(${Operator}) Between ${num1} & ${num2} Is - ` + eval(`${num1} ${Operator} ${num2}`))
}