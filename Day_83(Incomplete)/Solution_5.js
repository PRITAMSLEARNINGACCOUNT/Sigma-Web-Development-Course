let Numbers = [1, 2, -5, 4, 5];
function SUM() {
    let Summation = 0;
    let Temp = 0;
    let Temp_2 = 0;
    for (let index = 0; index < Numbers.length; index++) {
        if (Numbers[index] < 0) {
            Temp++;
            Temp_2 = index;
            break;
        }
    }
    if (Temp == 1) {
        for (let index = 0; index < Temp_2; index++) {
            console.log(Numbers[index])
            Summation += Numbers[index];
        }
        console.log("So The Summation Of Numbers In The Array Given By User Is " + Summation);
    }
    else {
        console.log("Please Give A Negative Number To Perform Summation.");
    }

}
SUM();