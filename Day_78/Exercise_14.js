let Messages = ["Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"]
async function Blink() {
    return new Promise((Resolve, Reject) => {
        setTimeout(() => {
            Resolve(".")
        }, 1000);
    })

}
async function Send_Message(Message) {
    return new Promise((Resolve, Reject) => {
        setTimeout(() => {
            Resolve(Message)
        }, Math.floor(Math.random() * 8) * 1000);
    })
    // setTimeout(() => {
    //     return new Promise((resolve, reject) => {
    //         resolve(Message)
    //     })
    // }, Math.floor(Math.random() * 8))
}
const Main_Function = async () => {
    let Temp_Count = 0
    while (Temp_Count < Messages.length) {
        let Get_Message = await Send_Message(Messages[Temp_Count])
        document.querySelector(".Terminal").innerHTML += `<h1 id="Id_${Temp_Count}">${Get_Message}</h1>`
        let Blink_1 = await Blink()
        // console.log(Blink_1)
        document.querySelector(`#Id_${Temp_Count}`).innerHTML += Blink_1
        let Blink_2 = await Blink()
        // console.log(Blink_2)
        document.querySelector(`#Id_${Temp_Count}`).innerHTML += Blink_2
        let Blink_3 = await Blink()
        // console.log(Blink_3)
        document.querySelector(`#Id_${Temp_Count}`).innerHTML += Blink_3
        if (Temp_Count == (Messages.length - 1)) {
            document.querySelector(".Terminal").innerHTML = ""
            Temp_Count = 0
        }
        else {

            Temp_Count++
        }
    }
}
Main_Function()