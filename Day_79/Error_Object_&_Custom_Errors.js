console.log("In This Program Firstly I Am Going To Demonstrate Error Object And 3 Of The Main Function/Method Of This Object And After That I Am Going To Demonstrate Custom Errors.")
try {
    console.log(This_Is_An_Error)
} catch (error) {
    console.log("This Is The Name Of The Error " + error.name)
    console.log("This Is The Message Of The Error " + error.message)
    console.log("This Is The Complete Error Stack " + error.stack)
}
console.log("Now I Am Going To Produce A Custom Error And I Will Catch It Using Try/Catch Block")
try {
    throw SyntaxError("This Is A Custom Error Produced By Syntax Error Syntax/Method(Built-In Method) In JavaScript")
} catch (error) {
    console.log("So The Following Custom Error Is - ")
    console.log("This Is The Name Of The Error " + error.name)
    console.log("This Is The Message Of The Error " + error.message)
    console.log("This Is The Complete Error Stack " + error.stack)
}