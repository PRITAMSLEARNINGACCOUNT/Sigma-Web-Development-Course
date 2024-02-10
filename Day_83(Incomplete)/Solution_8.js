
async function Func(Number_Array) {
    let arr = [];
    for (let index = 0; index < Number_Array.length; index++) {

        arr.push(new Promise((resolve, reject) => {
            resolve(Number_Array[index] * 2);
        }))

    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arr);
        }, 500);
    })
}
let numbers = [2, 3, 4, 5, 6, 7];
Func(numbers).then((val) => {
    console.log(val);
})
