console.log("In This Program I Am Going To Demonstrate 'Finally' Which Will Execute Even After Everything Is Ended.I Am Going To Demonstrate It Using A Function & Also I Am Going To Demonstrate It Using Try/Catch Block")
function Finally() {
    try {
        console.log("This Is A Line Which Is Under A Try/Catch Block Which Is Under Function I Created")
        console.log("And As This Line Is Written Under Try Block It Is Returning And The Function Is Ending Here Because Try Block Doesn't Producing Any Error And Returning To The Function.")
        return
    } catch (error) {
        console.log("So The Error Is - " + error)
    }
    finally {
        console.log("This Is Under Finally Block (Written Under The Function As Well After The Try Block Where The Function Is Returning) Which Is Producing The Code Written Under It Even After Returning The Function")
    }
}
Finally()
console.log("This Is Not Under A Function And I Am Now Going To Demonstrate Finally Using Only Try/Catch Block.")
try {
    console.log("Here I Am Going To Produce An Custom Error")
    throw Error("So This Is A Custom Error")
} catch (error) {
    console.log("So The Error Is - " + error)
}
finally {
    console.log("So This Is Written Under The Finally Block So This Line Is Executing Even After The Try/Catch Is Producing An Error.")
}