class Simple {
    constructor() {
        console.log("This Is A Simple Constructor Which Is Inside Of The Non-Derived Class.")
    }
}
class Complex extends Simple {
    constructor() {
        super()
        console.log("Now I Am Inside Of The Derived Class Constructor.And In Constructor Overriding Everybody Must Have To Call The Constructor Using 'Super' Keyword From Which A Derived Class Is Extended.")
    }
}
console.log("In Constructor Overriding An Individual Just Need To Make An Object Out Of The Derived Class.")
let Derived_Varriable = new Complex()
console.log("So That's How Constructor Overriding Works.")