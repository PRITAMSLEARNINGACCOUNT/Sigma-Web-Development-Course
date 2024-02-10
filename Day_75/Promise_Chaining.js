function Vote(age) {
    return new Promise((resolve, reject) => {
        if (age > 0 && age > 18) {
            alert("You Are Finally Eligable For Voting")
            resolve("Your Request Has Successfully Resolved")
        }
        else if (age > 0) {
            alert("You Are Not Eligable For Voting")
            resolve("Your Request Has Successfully Resolved")
        }
        else {
            reject("The Age Given By You Is Invalid")
        }

    })
}

let Age = prompt("Enter Your Age??")
Vote(Age).then(() => {
    Age = prompt("Enter Your Age??")
    return Vote(Age)
}).then(() => {
    Age = prompt("Enter Your Age??")
    return Vote(Age)
}).then(() => {
    Age = prompt("Enter Your Age??")
    return Vote(Age)
}).catch((error) => {
    alert(error)
})


