let First_Promise = new Promise((resolve, reject) => {
    console.log("This Is Under The Promise I Created")
    resolve(50)
})
setTimeout(() => {
    console.log("This Was A Sentence Under 'setTimeout' With 3 Seconds Of Interval Time.")
    console.log("And This Interval Is Declared Just After The Creation Of First Promise.")
}, 3000);
console.log("So The Promise Is Resolved With A Value Of 50 Which Is Shown Below - ")
console.log(First_Promise)
console.log("This Promise Object Has Two States One Of Them Is Resolve State & The Another One Of Them Is Rejected And Both Of Them Will Be Considered As Fulfilled State.")