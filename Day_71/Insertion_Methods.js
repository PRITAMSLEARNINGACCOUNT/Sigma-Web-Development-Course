console.log("In This Programme I Am Going To Demonstrate Some Important Insertion Methods.")
console.log("Firstly I Am Going To Create An Another Box Using Division And Then I Am Going To Append It Along With The Other Boxes.")
let newelement = document.createElement("div")
console.log("I Have Create A Varriable Along With The Creation Of A New Division.Now I Am Going To Set The Class Of This New Division Which Is An Another Box")
newelement.className = "box"
console.log("Now I Am Going To Set Some Texts Beside The New Division I Created")
newelement.innerHTML = "Box 3"
console.log("Now I Am Going To Use An Another Insertion Method To Append The New Division I Created Under The Container Where Previous Two Containers Are Existing.")
document.getElementsByClassName("Container")[0].append(newelement)
console.log("That's How I Can Append Elements At The End Of A Node.")
console.log("Now I Am Going To Demonstrate A Method Which Append At The Start Of The Node And In Order To Demonstrate It I Am Going To Create A New Division Just Like We Have Created One Before.")
let element_2 = document.createElement("div")
element_2.className = "box"
element_2.innerHTML = "Box 4"
document.getElementsByClassName("Container")[0].prepend(element_2)
console.log("So That's How We Can Append Anything At The Start Of A Node.")
console.log("Now I Am Going To Demonstrate A Method Which Add An Another Element Before The Element Selected And In Order To Demonstrate It I Am Going To Create A New Division Just Like We Have Created One Before.")
let element_3 = document.createElement("div")
element_3.className = "box"
element_3.innerHTML = "Box 5"
document.getElementsByClassName("Container")[0].before(element_3)
console.log("So That's How We Can Add Anything Before Start Of A Node.")
console.log("Now I Am Going To Demonstrate A Method Which Add An Another Element After The Element Selected And In Order To Demonstrate It I Am Going To Create A New Division Just Like We Have Created One Before.")
let element_4 = document.createElement("div")
element_4.className = "box"
element_4.innerHTML = "Box 6"
document.getElementsByClassName("Container")[0].after(element_4)
console.log("So That's How We Can Add Anything After Start Of A Node.")
console.log("Now I Am Going To Demonstrate A Method Which Will Replace The Element Selected With An Another Element And In Order To Demonstrate It I Am Going To Replace Sixth Element With The Fifth Element.")
document.getElementsByClassName("box")[5].replaceWith(element_3)
console.log("So That's How We Can Able To Insert Things Under The HTML File.")