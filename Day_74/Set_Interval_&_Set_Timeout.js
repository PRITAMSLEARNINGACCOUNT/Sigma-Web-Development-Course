console.log("In This Programme I Am Going To Demonstrate Set Interval And Set Timeout.")
console.log("Set Interval Does A Task Over And Over Again Within A Given Time.")
console.log("Whereas Set Timeout Does A Task Only For Once Within A Given Time.")
console.log("Firstly I Am Going To Demonstrate Set Timeout And In Order To Demonstrate It I Am Going To Create A Function")
setTimeout((a, b) => {
    console.log(a + b)
}, 1000, 5, 6);
console.log("So As You Can See That I Have Demonstrated The Set Timeout With A Function Which Gives The Answer Of Addition Of Two Numbers.")
console.log("Now I Am Going To Demonstrate Set Interval Method Which Wil Repeatedly Do A Same Task Within A Period Of Time.")
setInterval((a, b) => {
    console.log(a - b)
}, 5000, 6, 5);
console.log("So I Have Successfully Demonstrated Set Interval Method Which Is Executing A Function Of Subraction Over And Over Again After The Period Of Time Given.")