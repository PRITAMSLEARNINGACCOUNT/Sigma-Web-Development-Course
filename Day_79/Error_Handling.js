function Callback(error) {
    if (error == null) {
        console.log("You Have Given An Invalid Age.")
    }
    else {

        console.log("Your Age Is " + error)
    }

}
function Error_Handling(age, Callback) {
    if (age < 0) {
        Callback(null)
        return 0
    }
    Callback(age)

}
let AGE = prompt("Enter Your Age??")
Error_Handling(AGE, Callback)