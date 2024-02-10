class Normal {
    Basic_Method() {
        console.log("This Is A Simplified Basic Method Which Is Written Under The Non-Derived First Class.")
    }

}

class Derived extends Normal {
    Basic_Method() {
        super.Basic_Method()
        console.log("This Is Inside Of The Extended Method So The Basic Method Written In The Previous Class Is Now Being Called Using 'Super' Keyword So The Previous Basic Method Which Is Written Under The Previous Non-Derived Class Is Now Being Called From The Derived Class.")
    }
}
console.log("Now I Can Call Two Methods Which Are Supposedly Being Overwritten From The Derived Class As I Am Now Using 'Super' Keyword.")
let Derived_var = new Derived
Derived_var.Basic_Method()