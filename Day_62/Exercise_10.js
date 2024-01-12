function Number_Generator(Value) {
    let Local_value = Math.random() * Value
    return Number.parseInt(Local_value)
}
let Adjectives = {
    0: "Crazy",
    1: "Amazing",
    2: "Fire",
}
let Shop_Names = {
    0: "Engine",
    1: "Foods",
    2: "Garments"
}
let Another_Words = {
    0: "Bros",
    1: "Limited",
    2: "Hub",
}
alert(`So the Generated Buisness Name For You Is ${Adjectives[Number_Generator(3)]} ${Shop_Names[Number_Generator(3)]} ${Another_Words[Number_Generator(3)]}`)