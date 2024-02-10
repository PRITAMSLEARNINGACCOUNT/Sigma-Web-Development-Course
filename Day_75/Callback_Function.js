function CallBack(Call_Back_Function) {
    console.log("This Is The Main Function Which Consists Of Only A CallBack Function")
    Call_Back_Function()
}
console.log("I Am Calling The CallBack Function By Using An Arrow Function.")
CallBack(() => {
    console.log("So This Is The CallBack Function.")
})