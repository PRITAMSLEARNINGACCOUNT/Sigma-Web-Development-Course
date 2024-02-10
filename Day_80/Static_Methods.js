class static_method {
    constructor(value_1, value_2) {
        this.Value_1 = value_1
        this.Value_2 = value_2
    }
    static Addition(val_1, val_2) {
        console.log("This Is Being Done Inside Of A Static Function For Which An Individual Just Need To Call This Function Using Class Name Like Any Other Function Call,This Function Works Without Any Kind Of Object So I Can Use This Function Anytime Anywhere In My Codebase Without Even Creating An Object Of The Class In Which This Method Is Declared.")
        console.log("So The Summation Of Given Two Numbers Is - " + (val_1 + val_2))
    }
}
let object = new static_method(5, 6)
static_method.Addition(object.Value_1, object.Value_2)
