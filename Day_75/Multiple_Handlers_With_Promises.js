function Vote(age) {
    return new Promise((resolve, reject) => {
        if (age == 15) {
            setTimeout(() => {
                resolve("The Promise Is Now Resolved.")
            }, 1000);
        }
        else {
            reject("The Promise Is Not Resolved Yet.")
        }

    })
}
let promise = Vote(15)
promise.then(() => {
    console.log("First Handler After Resolvation")
})
promise.then(() => {
    console.log("Second Handler After Resolvation")
})
promise.then(() => {
    console.log("Third Handler After Resolvation")
})
console.log("Three Of The Handlers Executed Successfully Simultaneously After 1 Second Because The Interval Is Set Using 'setTimeout'.")

