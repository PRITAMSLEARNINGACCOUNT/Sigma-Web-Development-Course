console.log("In This Programme I Am Going To Demonstrate Try/Catch Block With Error Handling.")
try {
    console.log("This Line Is Printing As It Is Under Try Syntax Because I Didn't Produce Any Errors Intentionally To Print The Error With Catch Syntax.")
} catch (error) {
    console.log(error)
}
console.log("Now I Am Going To Produce An Error Intentionally Into Catch Block Using Try/Catch Block")
try {
    console.log("This Is A Try Statement", hue_hue_hue)
} catch (error) {
    console.log("So The Following Error Is " + error)
}