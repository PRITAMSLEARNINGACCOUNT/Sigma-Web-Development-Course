alert("In This Programme I Am Going To Demonstrate Map,Filter & Reduce With Arrays.")
alert("Firstly I Am Going To Demonstrate Map Which Takes One Argument And Returns Values.In Order To Demonstrate It I Am Going To Declare An Array.")
let Array = ["Hello World", 54.5, true, false, 1]
alert("So Now I Am Using Map Functionality With The Array I Declared Which Is - " + Array + " And By Using Map Function I Can Return Any Type Of Value I Want Just Like I Am Returning Values By Adding 1 To Every Value." + Array.map((Value) => {
    return Value + 1
}))
alert("Now I Am Going To Demonstrate Filter Function Which Also Takes One Argument And Returns Values Depending On A Condition Being True.In Order To Demonstrate It I Am Going To Declare An Another Array.")
let Array_2 = [10, 20, 30, 50, 1, 2, 3, 4, 5, 40]
alert("So Now I Am Using Filter Functionality With The Array I Declared Which Is - " + Array_2 + " And By Using Filter Function I Can Return Value Based On A Condition Being True." + Array_2.filter((Value) => {
    return Value > 10
}))
alert("Now I Am Going To Demonstrate Reduce Function Which Takes Two Arguments And Returns Values Depending On A Programming Logic.In Order To Demonstrate It I Am Going To Use That Same Array But By Declaring It Again With A New Varriable.")
let Array_3 = [10, 20, 30, 50, 1, 2, 3, 4, 5, 40]
alert("So Now I Am Using Reduce Functionality With The Array I Declared Which Is - " + Array_3 + " And By Using Reduce Function I Can Return Value Based On A Logic." + Array_3.reduce((Value, Value_2) => {
    return Value + Value_2
}))
alert("Remember That Every Function Demonstrated In This Programme Returns A New Array And Doesn't Change Or Modifies The Declared Array.")