async function Event_Bubbling_1() {
    document.querySelector(".child").addEventListener("click", (e) => {
        // e.stopPropagation()
        document.querySelector(".child").innerHTML = "<b>Child Is Clicked</b>"
    })

    document.querySelector(".childContainer").addEventListener("click", (e) => {
        // e.stopPropagation()
        document.querySelector(".childContainer").insertAdjacentHTML("beforeend", " <b> Child Container Is Clicked.</b>")
    })

    document.querySelector(".container").addEventListener("click", (e) => {
        document.querySelector(".container").insertAdjacentHTML("beforeend", " <b> Container Is Clicked.</b>")
    })
}
async function Event_Bubbling_2() {
    document.querySelector(".Sub_Text_2").addEventListener("click", (e) => {
        e.stopPropagation()
        document.querySelector(".Sub_Text_2").innerHTML = "<b>Sub Text 2 Class Is Only Clicked</b>"
        alert("So Event Bubbling Is Successfully Resolved This Time.")
    })

    document.querySelector(".Sub_Text").addEventListener("click", (e) => {
        e.stopPropagation()
        document.querySelector(".Sub_Text").insertAdjacentHTML("beforeend", " <b>Sub Text Class Is Clicked.</b>")
    })

    document.querySelector(".Text").addEventListener("click", (e) => {
        document.querySelector(".Text").insertAdjacentHTML("beforeend", " <b> Text Class Is Only Clicked.</b>")
    })
}


(
    async () => {
        Event_Bubbling_1()
        Event_Bubbling_2()
    }
)()


