let object = {
    "Key_1": "Value_1",
    "Method": () => {
        console.log("This Is A Method")
        return "Method Executed Successfully."
    }
}
let Prototypal_Inheritance = {
    "First_Key": "This Is The Value Of 1st Key"
}

let object_2 = {
    "Method_Key": () => {
        return "Hello World"
    }
}
console.log("We Can Chain Up Linked Objects Together Which Is Also Known As Prototypal Inheritance.")
object_2.__proto__ = Prototypal_Inheritance
object.__proto__ = object_2
console.log("As I Have Linked Up Everything In A Chain Of Objects So Now I Can Access Any Method/Property From One Object Alone As It Inherits All Of The Property/Method From Other Objects.")
console.log(object.First_Key)