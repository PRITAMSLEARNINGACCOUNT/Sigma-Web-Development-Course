alert("In This Programme I Am Going To Demonstrate For Loop With Arrays And For That I Am Going To Declare An Array.")
let Array = ["Harry Bhai Is The Best", 54, true, false, 54.88]
alert("Firstly I Am Going To Use Normal For Loop & Array Indexing To Demonstrate Array With For Loop")
for (let index = 0; index < Array.length; index++) {
    alert("So Now I Am Under The For Loop And I Am Printing The Values Of An Array One By One " + Array[index])
}
alert("So That's How I Can Access Every Element Of An Array Using Normal For Loop.")
alert("Now We Are Going To Use For In Loop With Arrays.")
for (const key in Array) {
    alert("So Now I Am Under The For In Loop And I Am Printing The Values Of An Array One By One " + Array[key])
}
alert("Now We Are Going To Use For Of Loop With Arrays.")
for (const Value of Array) {
    alert("So Now I Am Under The For Of Loop And I Am Printing The Values Of An Array One By One " + Value)
}
alert("Now We Are Going To Use For Each Loop With Arrays.")
Array.forEach(element => {
    alert("So Now I Am Under The For Each Loop And I Am Printing The Values Of An Array One By One " + element)
})

alert("I Can Also Take Elements To The Array Using For Loop And I Am Creating A Varriable Along With The Array To Take Values And Push Them Into The Array.")
let Pushed_Array = []
alert("So I Have Created An Empty Array Which Is - " + Pushed_Array)
for (let index = 0; index < 5; index++) {
    let varriable = prompt("Enter A Value??")
    Pushed_Array.push(varriable)
}
alert("So You Can Now See The Added Elements To That Empty Array Which Are - " + Pushed_Array)