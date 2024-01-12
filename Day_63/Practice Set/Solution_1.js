let array = [1, 2, 3, 4, 5]
alert("This Is The Array I Declared " + array)
for (let index = 0; index < 5; index++) {
    let element = prompt("Enter A Value?")
    array.push(element)

}
alert("And This Is The Array After Pushing 5 Elements Into It " + array)