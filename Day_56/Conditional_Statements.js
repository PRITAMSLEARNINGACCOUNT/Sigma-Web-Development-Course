alert("Firstly We Are Going To Demonstrate Some Operators In JavaScript")
alert("So We Are Doing Some Arithmetic Operations Between Two Varriable Using Arithmetic Operators")
alert("So We Are Taking Input For Those Varriables We Will Be Using To Demonstrate Operators")
let a = prompt("Enter The Value Of First Varriable??")
let b = prompt("Enter The Value Of Second Varriable??")
prompt("So The Value After Performing Addition Between Two Varriables Is ", a + b)
prompt("So The Value After Performing Subtraction Between Two Varriables Is ", a - b)
prompt("So The Value After Performing Multiplication Between Two Varriables Is ", a * b)
prompt("So The Value After Performing Division Between Two Varriables Is ", a / b)
prompt("The Reminder After Division Is ", a % b)
alert("Now We Are Going To Demonstrate Assignment And Exponential Operator Using Those Two Varriables")
prompt("We Have Used += Operator To Add A Value To A Varriable", a += b)
prompt("We Have Used -= Operator To Subtract A Value To A Varriable", a -= b)
prompt("We Have Used *= Operator To Multiply A Value To A Varriable", a *= b)
prompt("We Have Used /= Operator To Divide A Value To A Varriable", a /= b)
prompt("We Have Used %= Operator To Find Remainder After Division Varriable", a %= b)
prompt("Now We Are Going To Demonstrate Exponential Operator ", a ** b)
alert("Now We Will Demonstrate Conditional Statements")
alert("As I Have Nearly Completed Demonstrating Every Operators I Will Be Demonstating Logical Operators In Conditional Statements")
alert("Firstly We Will Demonstrate If-Else Statement Using A Varriable")
let Varriable = prompt("Enter Your Age??")
if (Varriable > 18) {
    alert("You Can Drive")
}
else {
    alert("You Can not Drive")

}
alert("Now We Will Demonstrate If-ElseIf-Else Statement Using The Same Varriable")
if (Varriable > 18) {
    alert("You Can Drive")
}
else if (Varriable < 18 && Varriable > 0) {
    alert("How Can You Even Think Of Driving??")

}
else {
    alert("Invalid Age")
}
alert("Now We Will Demonstrate Ternary Operator Using The Same Varriable")
let str = (Varriable < 18 && Varriable > 0) ? "How Can You Even Think Of Driving??" : "You Can Drive"
prompt("So Now I Am Showing The Result After Using Ternary Operator So The Result Is - ", str)