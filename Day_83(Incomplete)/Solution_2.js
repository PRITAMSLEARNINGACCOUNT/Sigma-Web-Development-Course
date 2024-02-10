let numbers = [1, 2, 3, 4, 4, 6, 7, 7, 9, 10];
let Double = [];
function Double_Trouble(num) {
    return num * 2;
}
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] == numbers[index + 1]) {
        index++;
        Double.push(Double_Trouble(numbers[index]));
    }
    else {
        Double.push(Double_Trouble(numbers[index]));
    }
}
console.log(Double);