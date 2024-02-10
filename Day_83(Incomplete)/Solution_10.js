async function brewCoffee(Type) {
    return new Promise((Resolve, Reject) => {
        setTimeout(() => {
            Resolve(`Your ${Type} Is Ready`);
        }, Math.floor(Math.random() * 10) * Math.floor(Math.random() * 1000));
    })
}
brewCoffee("Cappuccino").then((Resolved_Value) => {
    console.log(Resolved_Value);
})