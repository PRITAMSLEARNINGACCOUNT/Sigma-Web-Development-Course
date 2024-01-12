Array.from(document.getElementsByClassName("box")).forEach(element => {
    element.style.background=`rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
});
console.log("Hello World")