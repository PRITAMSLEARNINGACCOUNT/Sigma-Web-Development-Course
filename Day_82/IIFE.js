const Func_1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(50)
            console.log("This Is First Function")
        }, 3000)
    })
}
const Func_2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(50)
            console.log("This Is Second Function")
        }, 3000)
    })
}
const Func_3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(50)
            console.log("This Is Third Function")
        }, 3000)
    })
}
(

    async () => {
        console.log("Executing Using IIFE(Immediately Invoked Function Expression)")
        await Func_1()
        await Func_2()
        await Func_3()
    }
)()
