let promise_1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("This Is Under The First Promise")
        resolve(1)
    }, 10000);
})
let promise_2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("This Is Under The Second Promise")
        resolve(1)
    }, 2000);

})
let promise_3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("This Is Under The Third Promise")
        resolve(1)
    }, 3000);
})
let promise_4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Error Occured Under The Fourth Promise"))
        // console.log("This Is Under The Fourth Promise")
    }, 4000);
})
let promise_5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("This Is Under The Fifth Promise")
        resolve(1)
    }, 5000);
})
// let All_Promises = Promise.all([promise_1, promise_2, promise_3, promise_4, promise_5])
// console.log(All_Promises)
console.log("The Above Function Wil Throw An Error That's Why Uncomment It To Run The Above Code.")
let allSettled_Promises = Promise.allSettled([promise_1, promise_2, promise_3, promise_4, promise_5])
console.log(allSettled_Promises)
let race = Promise.race([promise_1, promise_2, promise_3, promise_4, promise_5])
console.log(race)
let Resolved_Promise = Promise.resolve(6)
console.log(Resolved_Promise)
console.log("Uncomment Below Code To Run The Method/Function Used In Below Code(It Will Throw An Error That's Why I Make It Commented).")
// let Rejected_Promise = Promise.reject(new Error("Hey"))
// console.log(Rejected_Promise)