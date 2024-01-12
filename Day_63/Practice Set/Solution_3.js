function Divisable_By_10(x) {
    return x % 10 == 0
}
let arr = [50, 30, 2, 11, 209]
alert("So The Array Of Numbers Which Are Divisable By 10 Is ")
alert(arr.filter((x) => {
    return + x % 10 == 0
}))
