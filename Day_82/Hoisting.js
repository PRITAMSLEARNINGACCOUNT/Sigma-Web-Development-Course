console.log("In JavaScript The Concept Of Hoisting Suggests That Every Function And Varriable Which Are Declared With 'var' Can Be Accessed From The Top Of The Code Even They Are Written After The Function Call...It Happens Because JavaScript Always Load Them Onto The Top Of The Code.");
console.log("Note: Hoisting In JavaScript Only Applies On 'var' Varriables And Normal Function/Async Function.But Hoisting Doesn't Apply On 'let' & 'const' Varriables Because They Behave Differently & They Doesn't Listed In The Top Of The Code.");
console.log("Let's Examplify Hoisting For Now.");
Hoisting();
function Hoisting() {
    console.log("This Function Demonstrate Hoisting Because It Declared After The Function Call.");
}
console.log("I Can Not Access The Value Of A Varriable But I Can Use That Varriable Which Will Give Me A Value 'undefined' Because Hoisting Doesn't Apply On Initialization It Only Apply On Declarations.")
console.log(`So The Value Of The Varriable Declared Using 'var' Before Initialization Is ${varriable}`);
var varriable = "This Is A Varriable";
console.log(`So The Value Of The Varriable Declared Using 'var' Is ${varriable}`);

