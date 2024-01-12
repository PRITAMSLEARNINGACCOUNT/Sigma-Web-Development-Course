alert("In This Programme I Am Going To Demonstrate Arrays And How They Actually Works.")
alert("And For That I Am Going To Declare An Array.")
let array = ["Harry", "Bhai", 54, 55.87, true, false, "Pagol", "Chagol"]
alert("So I Declared An Array And The Array Is - " + array)
alert("Now I Am Going To Access The Array Using Indexing(Indexing Always Starts From 0 And It Go Untill The Length Of The Array)")
alert("So The First Element From The Array I Declared Is - " + array[0])
alert("So The Fourth Element From The Array I Declared Is - " + array[3])
alert("So The Sixth Element From The Array I Declared Is - " + array[5])
alert("I Can Add New Elements Or Change One Element From The Existing Array Using Array Indexing")
array[8] = "Hello World"
array[5] = "False(String)"
alert("So Now I Am Printing The Changed And Newly Added Values To The Array - " + array[5] + " , " + array[8])
alert("I Can Also Use TypeOf Operator To See That The Type Of The Array Is Object")
alert("So The Type Of The Array Is - " + typeof (array))