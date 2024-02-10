console.log("I Am Going To Demonstrate Some Methods Which Can Be Used With 'localStorage'")
console.log("'localStorage' Is Used To Store Something Locally In The Browser Instead Of A Server.")
console.log("'localStorage' Stores Data As A Key Value Pair.")
localStorage.setItem("Key", "Value")
console.log("So I Have Set An Item Locally Using A 'localStorage' Method Named 'setItem' And Now I Am Getting The Value Of It Using An Another 'localStorage' Method Named 'getItem'" + localStorage.getItem("Key"))
localStorage.removeItem("Key")
console.log("So I Have Removed The Key I Inserted Previously In 'localStorage' Using A 'localStorage' Method Named 'removeItem'.")
console.log("Now I Am Going To Add Some More Key Value Pairs Into Local Storge Then I Am Going To Print The Key Of It Using 'key' Method One By One By Getting The Length Of The Total Numbers Of Key Value Pairs Using 'length' Method.")
localStorage.setItem("First_Key", "First_Value")
localStorage.setItem("Second_Key", "Second_Value")
localStorage.setItem("Third_Key", "Third_Value")
for (let index = 0; index < localStorage.length; index++) {
    console.log(localStorage.key(index))
}
console.log("So These Are Some Commonly Used Functions/Methods Of 'localStorage'")
console.log("Lasly We Can Add Elements To 'localStorageAs' Key Value Pairs Using A Different Method Two Which I Am Demonstrating Below")
localStorage.one = "10"
console.log("So This Is The Value Of The New Key Value Pairs Set With A Different Method " + localStorage.getItem("one"))
console.log("NOTE:'localStorage' Persists(Stores) Data.")