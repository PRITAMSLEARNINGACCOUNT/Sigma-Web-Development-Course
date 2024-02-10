class University {
    constructor(Name, Associated_With, Sname) {
        this.University_Name = Name
        this.Associated_With = Associated_With
        this.Student_Name = Sname
    }
    Set_Programme(Program_Name, Duration, Fees) {
        this.Program_Name = Program_Name
        this.Program_Duration = Duration
        this.Program_Fees = Fees
    }
    Course_Details(CName, Attendence, TName) {
        this.Teacher_Name = TName
        this.Course_Name = CName
        this.Attendence = Attendence
    }
    Show_Data() {
        console.log(`${this.Student_Name} Is Studying At ${this.University_Name} Which Is Associated With ${this.Associated_With}`)
        if (this.Program_Name != undefined) {
            console.log(`Now ${this.Student_Name} Pursued ${this.Program_Name} Which Costs Rs.${this.Program_Fees} As It Is ${this.Program_Duration} Years Long.`)
            if (this.Teacher_Name != undefined) {
                console.log(`One Of The Main Course From ${this.Program_Name} Is ${this.Course_Name} Which Is Taken By ${this.Teacher_Name}.`)
                console.log(`${this.Student_Name}'s Attendence On This Course Is ${this.Attendence}`)
            }
        }

    }
}

let pritamstech = new University("Brainware University", "UGC", "Pritam Saha")
pritamstech.Set_Programme("BCA", 4, 320000)
pritamstech.Course_Details("Programming In C Lab", "100%", "Debashri Debnath")
pritamstech.Show_Data()