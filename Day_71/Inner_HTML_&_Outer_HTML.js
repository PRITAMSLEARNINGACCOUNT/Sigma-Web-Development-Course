console.log("In This Programme I Am Going To Demonstrate Inner HTML And Outer HTML.")
console.log("Inner HTML Gives The HTML From A Particular Element And It Also Helps To Set Text Under That Element.")
console.log("Whereas Outer HTML Gives The Complete Element With Tags Including The Texts Under That Element And It Also Helps To Set Text Under That Element.")
console.log(document.getElementsByClassName("Container")[0].innerHTML)
console.log("So As You Can See That I Am Getting The Inner HTML From The Container Division.")
console.log("Now I Can Get The Complete HTML Code Of Container Box As I Used Outer HTML.")
console.log(document.getElementsByClassName("Container")[0].outerHTML)
console.log("And Now I Can Set The Inner HTML Of Box Division.")
document.getElementsByClassName("box")[0].innerHTML = "These Is Box 1"
document.getElementsByClassName("box")[1].innerHTML = "These Is Box 2"
console.log("I Can Also Set The Outer HTML Which Will Override The Complete HTML That's Why I Am Not Inserting It.")