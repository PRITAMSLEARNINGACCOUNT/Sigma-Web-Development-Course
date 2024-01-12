console.log("In This Programme I Am Going To Demonstrate Hidden Property Which Make An Element Hidden And Non-Hidden Too.")
console.log("Currently In My HTML File I Have One Hidden And One Non-Hidden Heading I Am Going To Use Hidden Property To Make The Hidden Item Non-Hidden And Non-Hidden Item Hidden.")
document.querySelector("h1").hidden = false
document.querySelector("h2").hidden = true
console.log("So I Make The Non-Hidden HTML Hidden And The Hidden Element Non-Hidden.")
console.log("Also I Can View A Complete HTML As Text Using Text Property.")
console.log(document.body.textContent)
console.log("So These Are All Text Contents Under The HTML Body Extracted Using TextContent.")
