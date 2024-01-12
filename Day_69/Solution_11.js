let num = prompt("Enter A Number To Calculate Factorial??")
let array = Array.from(Array(Number.parseInt(num)+1).keys())
alert(`So The Factorial Of ${num} Is ${array.slice(1,).reduce((a, b) => {
    return a * b
})}`)


