let object = {
    "Rohan": 40,
    "Pritam": 4,
    "Shreya": 80,
    "Moubani": 10,
    "Shibham": 90,
}
for (let index = 0; index < Object.keys(object).length; index++) {
    alert("The Marks Of " + Object.keys(object)[index] + " Is " + object[Object.keys(object)[index]])

}