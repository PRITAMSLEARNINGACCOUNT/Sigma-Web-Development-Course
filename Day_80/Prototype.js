let object = {
    "Key_1": "Value_1",
    "Method": () => {
        console.log("This Is A Method")
        return "Method Executed Successfully."
    }
}


let object_2 = {
    "Method_Key": () => {
        return "Hello World"
    }
}
console.log("We Can Add One Object Into An Another Object And Use The Methods Or Properties Of The Linked Object.")
object.__proto__ = object_2
console.log(object)