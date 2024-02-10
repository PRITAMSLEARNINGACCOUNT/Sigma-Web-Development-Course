let string = "Hello World";
let Mirror_String = "";
function Mirror() {
    for (let index = (string.length - 1); index >= 0; index--) {
        Mirror_String += string[index];
    }
    string += Mirror_String

}
Mirror()
console.log(string)