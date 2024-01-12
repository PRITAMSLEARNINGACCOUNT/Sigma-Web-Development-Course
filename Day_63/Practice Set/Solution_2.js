function AddingNum() {
    let num;
    while (true) {
        num = prompt("Enter A Value To Add Into The Array??")
        if (num == 0) {
            return 0
        }
        else {
            array.push(num)
        }
    }
}
let array = [1, 2, 3, 4, 5, "Hello World", "Harry Bhai", "Pritam Saha", "Pijush Saha", "Papia Saha"]
alert("So This Is The Array I Declared - " + array)
AddingNum()
alert("And This Is The Array After Pushing Elements Into It - " + array)