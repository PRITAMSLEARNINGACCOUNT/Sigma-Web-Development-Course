const File_System = require("fs/promises")

File_System.appendFile("File.txt", "This Is A Data Which Is Appending To This File", (error, File_Data) => {
    if (error != undefined) {
        console.log("So The Following Error Arose - ", error)
    }
    console.log("Appended Successfully.")

})
console.log("This Line Is Printing After The Successfull Append To The File.")
