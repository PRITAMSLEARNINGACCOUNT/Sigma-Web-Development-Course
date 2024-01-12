var var_1 = 67
var var_2 = "Hello World"
var var_3 = 54.55
var var_4 = true
var var_5 = null
var var_6 = undefined
{
    let var_1 = 500
    alert("Inside Of The Block,We Are Printing The Value Of The Varriable And The Type Of The Varriable")
    prompt(var_1, typeof (var_1))
    var var_2 = "Nobody Is Bad"
}
alert("Outside Of The Block,We Are Printing The Value Of The Varriable And The Type Of The Varriable")
prompt(var_1, typeof (var_1))
prompt(var_2, typeof (var_2))
prompt(var_3, typeof (var_3))
prompt(var_4, typeof (var_4))
prompt(var_5, typeof (var_5))
prompt(var_6, typeof (var_6))
alert("All Of The Above Data And Their Types Is Primitive")
alert("Now We Are Moving Forword To Objects In JavaScript")
let Dictionary = {
    "name": "Pritam",
    "Surname": "Saha",
    "Age": 19
}
console.log(Dictionary)
alert("Go To Console To See The JavaScript Object")
alert("So This Is An Example Of Object In JavaScript")