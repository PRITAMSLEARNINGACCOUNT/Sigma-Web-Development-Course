console.log("In This Programme I Am Going To Demonstrate DOM(Document Object Model) Tree With ChildNodes,FirstChild & LastChild.")
console.log("Firstly I Am Printing First Child Of This HTML Document.")
console.log(document.documentElement.firstChild)
console.log("Then I Am Printing Last Child Of This HTML Document.")
console.log(document.documentElement.lastChild)
console.log("And Lastly I Am Printing Every Nodes Of This HTML Document.")
console.log(document.documentElement.childNodes)
console.log("I Am Printing The FirstChild Of Third Child Node.")
console.log(document.documentElement.childNodes[2].firstChild)
console.log("Remember That There Are Some Blank Text Nodes In Your HTML Code For Beautifying Your HTML File,JavaScript Also Count Every One Of Them.")