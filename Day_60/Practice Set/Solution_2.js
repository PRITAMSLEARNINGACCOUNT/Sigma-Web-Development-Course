alert("'Includes' Method Return A Boolean Value Based On The String You Want To Find From The String Given")
let str = prompt("Enter A String???")
let find = prompt("Enter Something For Find From The String Given By You")
if (str.includes(find)) {
    alert("Yess,The Programme Has Successfully Founded The String You Are Looking For")

}
alert("Now I Am Going To Demonstrate The Work Of The Method 'startswith' & And The Work Of The Method 'endswith' And I Am Going To Take Two Varriables For Demonstrating Those Two Methods.")
let str_1 = prompt("Enter First String For Demonstrating The First Method??")
let str_2 = prompt("Enter Second String For Demonstrating The Second Method??")
alert("So This Is The Result Of The First Method Is " + str.startsWith(str_1))
alert("So This Is The Result Of The Second Method Is " + str.endsWith(str_2))
