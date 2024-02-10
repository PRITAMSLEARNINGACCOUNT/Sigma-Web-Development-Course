class Normal {
    Basic_Method() {
        console.log("This Is A Simplified Basic Method Which Is Written Under The Non-Derived First Class.")
    }

}

class Extended_Normal extends Normal {
    Basic_Method() {
        console.log("This Is Inside Of The Extended Method So The Basic Method Written In The Previous Class Is Now Overwritten In This Derived Class.")
    }
}
console.log("Firstly I Am Going To Show The Method Which Is Later Overwritten In Derived Class.")
let Normal_var = new Normal
Normal_var.Basic_Method()
console.log("And Now I Am Going To Show A Method Which Is Now Being Overwritten As It Is Written By The Same Name In The Derived Class")
let Derived_var = new Extended_Normal
Derived_var.Basic_Method()