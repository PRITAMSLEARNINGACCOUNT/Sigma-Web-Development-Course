function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
function ChangeColor() {
    document.querySelector(".container").style.background = getRandomColor()
}
function ChangeColor_2() {
    document.querySelector(".container_3").style.background = getRandomColor()
}
document.querySelector(".container_2").addEventListener("click", (Event_Details) => {
    console.log(`So The Event Details Is ${Event_Details}.Look This Object To Know About The Event Details.`)
    document.querySelector(".container_2").style.background = getRandomColor()
})
document.querySelector(".container_3").onclick = ChangeColor_2

alert("There Are Way Lot More Event Listeners Available But I Am Just Demonstrating 'click' Event In This Program Because I Am Just Focusing How An Event Listener Can Be Attached In Different Ways....For Exploring More Event Listeners Go To MDN Documentation.& Watch Console Log For More Information About An Event When It Is Fired.")

