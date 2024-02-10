
const Interval = setInterval(() => {
    console.log("This Text Is Going To Print Repeatedly Because It Has Declared Under 'setInterval' Function Which Has A Delay Of 1000 Second And I Can Clear This Interval Out Using 'clearInterval'.")
}, 1000);
setTimeout(() => {
    console.log("3 Times Over For 'setInterval'.")
    console.log("So Now It's Time To Clear The Interval In Order To Stop That Interval I Set")
    console.log("I Am Demonstrating 'clearInterval' On 'setInterval' But Remember That It Can Be Also Done With 'setTimeout'.")
    clearInterval(Interval)
}, 4000);
