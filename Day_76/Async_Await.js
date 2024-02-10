let links = ["https://cdn.replit.com/_next/static/chunks/4228-c3fbfa350e076387.js", "https://cdn.replit.com/_next/static/chunks/4010-cd3bfddf248fdd60.js", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"]
var links_length = 0


async function loadScript(src) {
    var script = document.createElement("script")
    script.src = src;
    document.body.appendChild(script)
    let promise = new Promise((resolve, reject) => {
        script.onload = function () {
            links_length++
            // console.log()
            resolve(true)
        }
        script.onerror = function () {
            // console.log("Unable To Load The Script With Link :" + src)
            reject("Given Script Is Invalid And JavaScript Is Unable To Load It Properly.")
        }
    })
    let a = await promise.catch((value) => {
        console.log(value)
    })
    if (a) {
        console.log("Loaded Script With Link :" + src)
        loadScript(links[links_length])
    }

    //     a.then(() => {
    //         loadScript(links[links_length])
    //     }, (value) => {
    //         return value
    //     })
}
loadScript(links[links_length])
