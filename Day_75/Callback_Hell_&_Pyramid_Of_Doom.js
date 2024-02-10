function CallBack_Hell(Callback, Value) {
    if (Value < 0) {
        Callback(null)
        return 0
    }
    Callback(Value)
}
let AGE = prompt("Enter Your Age??")
CallBack_Hell((error) => {
    if (error != null) {
        alert("Your Age Is " + error)
        AGE = prompt("Enter Your Age??")
        CallBack_Hell((error) => {
            if (error != null) {
                alert("Your Age Is " + error)
                AGE = prompt("Enter Your Age??")
                CallBack_Hell((error) => {
                    if (error != null) {
                        alert("Your Age Is " + error)
                        AGE = prompt("Enter Your Age??")
                        CallBack_Hell((error) => {
                            if (error != null) {
                                alert("Your Age Is " + error)
                                AGE = prompt("Enter Your Age??")
                            }
                            else {
                                alert("You Have Given An Invalid Age")
                            }
                        }, AGE)
                    }
                    else {
                        alert("You Have Given An Invalid Age")
                    }
                }, AGE)
            }
            else {
                alert("You Have Given An Invalid Age")
            }
        }, AGE)
    }
    else {
        alert("You Have Given An Invalid Age")
    }
}, AGE)

alert("Now Look At The Pyramid Of Doom Which Is Also Knows As Calback Hell In The Code.")
