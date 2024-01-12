let factorial = prompt("Enter A Number On Which You Want To Perform The Factorial??")
let array = []
for (let index = 1; index <= factorial; index++) {
    array.push(index)
}
alert(`So The Factorial Of ${factorial} is `)
factorial = array.reduce((a, b) => {
    return a * b
})
alert(factorial)