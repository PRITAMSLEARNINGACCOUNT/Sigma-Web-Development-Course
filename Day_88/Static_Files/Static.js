let array = ["Initializing Hack Program...", "Hacking Debangana's Username", `Username Found 'idebanganaroy'`, "Now Connecting To Facebook....", "Generating PSSH Keys Tu Decrypt The Password."]
var global_varriable = 0
async function AddingElements() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {

            let box = document.querySelector(".box")
            let newelement = document.createElement("p")
            box.append(newelement)
            let select = Array.from(document.querySelectorAll(".box p"))
            console.log(select[global_varriable])
            let selection = select[global_varriable]
            selection.innerHTML = array[global_varriable]
            global_varriable++
            if (global_varriable == (array.length - 1)) {
                console.log("hello")
                reject("Message Limit Exceded.")
            }
            else {
                resolve(true)
            }
        }, 3000);


    })
    let result = await promise.catch((value) => {
        console.log(value)
    })
    console.log(result)
    if (result) {
        AddingElements()
    }
}
AddingElements()
