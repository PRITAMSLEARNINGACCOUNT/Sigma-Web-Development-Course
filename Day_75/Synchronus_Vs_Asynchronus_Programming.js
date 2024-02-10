console.log("In This Program Firstly I Am Going To Demonstrate Synchronus Tasks Which Completes One After Another & Then I Am Going To Demonstrate Asynchronus Tasks Which Doesn't Await For An Another Task To Complete.")
console.log("This Is The First Line Which Is Printing As An Synchronus Task.")
console.log("This Is The Second Line Which Is Printing As An Synchronus Task.")
console.log("Now I Am Going To Demonstrate Synchronus Task Under A Loop.")
for (let index = 0; index < 2; index++) {
    console.log("So This Is Under A For Loop And Printing This Line As An Synchronus Task.")
}
console.log("Now I Am Going To Demonstrate Asynchronus Task With An Example Using 'setTimeout' Function Which Doesn't Await To Complete It's Task But It Starts Doing Everything Before And After It.")
setTimeout(() => {
    console.log("This Line Is Printing With An Interval Of 3 Seconds After Printing Everything Before & After This Asynchronus Function.")
}, 3000);
console.log("This Line Is Written After The Asynchronus 'setTimeout' Function But This Line Is Printing Itself Before The Execution Of The Asynchronus Function Because It Doesn't Await For Other Tasks To Complete.")