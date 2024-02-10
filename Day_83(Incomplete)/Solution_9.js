async function placeOrder() {
    return new Promise((Resolve, Reject) => {
        setTimeout(() => {
            Resolve("Your Order Has Successfully Confirmed.");
        }, Math.floor(Math.random() * 10) * Math.floor(Math.random() * 1000));
    })
}
placeOrder().then((Resolved_Value) => {
    console.log(Resolved_Value);
})