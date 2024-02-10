class My_Class {
    Set_Data(num) {
        this.number = num
        console.log("So I Have Set A Property Using A Method Which Takes One Argument With Which I Am Setting Up Data For Every Individual Specific Object")
    }
    Initial_Method() {
        console.log("Hello This Is From Inside Class.")
    }
    Get_Data() {
        console.log("So The Data Set By 'Set_Data' Method Is - " + this.number)
    }
}

let Object_From_Class = new My_Class
Object_From_Class.Initial_Method()
Object_From_Class.Set_Data(45)
Object_From_Class.Get_Data()