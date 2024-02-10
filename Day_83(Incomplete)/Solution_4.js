function Password_Validator(Password) {
    console.log(Password)
    if (Password.length >= 8) {
        for (let index = 65; index < 91; index++) {
            if (Password.includes(String.fromCharCode(index))) {
                break;
            }
            if (index == 90) {
                alert("Please Give An Uppercase Charecter To Validate Your Password.");
                break;
            }
        }
        for (let index = 97; index < 123; index++) {
            if (Password.includes(String.fromCharCode(index))) {
                break;
            }
            if (index == 122) {
                alert("Please Give A Lowercase Charecter To Validate Your Password.");
                break;
            }
        }
        for (let index = 48; index < 58; index++) {
            if (Password.includes(String.fromCharCode(index))) {
                break;
            }
            if (index == 57) {
                alert("Please Give A Numerical Value To Validate Your Password.");
                break;
            }

        }
    }
    else {
        alert("Please Give An Another Password To Validate Your Password.....Because The Password You Gave Isn't 8 Charecters Long.");
    }
}
let Pass = prompt("Enter A Password??");
Password_Validator(Pass)