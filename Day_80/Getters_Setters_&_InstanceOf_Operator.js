class Simplified_Normal {
    constructor() {
        console.log("Call It With Getter & Setter To Set Value And Get The Value.")
    }
    get Property() {
        return this._Value
    }
    set Property(value) {
        this._Value = value
    }
}
class Normal_Inheritance extends Simplified_Normal {
    constructor() {
        super()
        console.log("Now This Is From An Inherited Class Which Do Absolutely Nothing.")
    }
}
let object = new Simplified_Normal()
console.log("Firstly I Am Calling The Setter To Set A Specific Value")
object.Property = "Hello World"
console.log("And Then Getting The Value With A Getter To See The Value Which Is Being Set Using Setter.")
console.log(object.Property)
console.log("Now After Getter & Setter I Am Trying Out An Operator Knows As 'InstanceOf' Operator.")
console.log("Firstly I Am Cheecking 'InstanceOf' Operator For The Object Which Is Not Made Of An Inherited Class.")
console.log(`So Here Is The Result After Cheecking ${object instanceof Simplified_Normal}`)
console.log("And Then I Am Cheecking 'InstanceOf' Operator For The Object Which Is Made Of An Inherited Class With The Class From Which I Am Inheriting.")
let Inherited_Object = new Normal_Inheritance()
console.log(`And Again Here Is The Result After Cheecking ${Inherited_Object instanceof Simplified_Normal}`)
