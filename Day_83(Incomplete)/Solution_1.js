let Names = {
    "Pritam": "",
    "Motu": "",
    "Shuvankar": "",
    "Aditya": "",
    "Srayani": "",
    "Swati": "",
    "Neelabho": "",
    "Papiya": "",
    "Haris": "",
}
for (let key in Names) {
    if (key.length < 6) {
        Names[`${key}`] = "Gryffindor"
    }
    else if (key.length < 8) {
        Names[`${key}`] = "Hufflepuff"
    }
    else if (key.length < 12) {
        Names[`${key}`] = "Ravenclaw"
    }
    else {
        Names[`${key}`] = "Slytherin"

    }
}
console.log("So The Names Along With Their Selected Houses Is Listed Below.")
console.log(Names)
