Math.ceil((Math.random() * 256)).toString(2)
Array.from(document.getElementsByClassName("box")).forEach(element => {
    element.style.background = `#${Math.ceil((Math.random() * 256)).toString(16)}${Math.ceil(Math.random() * 256).toString(16)}${Math.ceil(Math.random() * 256).toString(16)}`
})
Array.from(document.getElementsByClassName("box")).forEach(element => {
    element.style.color = `#${Math.ceil((Math.random() * 256)).toString(16)}${Math.ceil(Math.random() * 256).toString(16)}${Math.ceil(Math.random() * 256).toString(16)}`
})