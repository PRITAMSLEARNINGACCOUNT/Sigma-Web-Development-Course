let Resolved_Promise = new Promise((resolve, reject) => {
    let AGE = prompt("What Is Your Age??")
    if (AGE < 0) {
        reject("Sorry You Have Given An Invalid Age.")
    }
    if (AGE > 18) {
        resolve("You Can Drive")
    }
    else {
        resolve("You Can Not Drive")
    }
})
let Rejected_Promise = new Promise((resolve, reject) => {
    setInterval(() => {
        reject("You Are Already Rejected In Second Promise With 'setInterval' With The Interval Of 2 Seconds")
    }, 2000)
})
Resolved_Promise.then((Resolved_Value) => {
    alert(Resolved_Value)
}, (Rejected_Value) => {
    alert(Rejected_Value)
})
Rejected_Promise.catch((Rejected_Value) => {
    alert(Rejected_Value)

})
