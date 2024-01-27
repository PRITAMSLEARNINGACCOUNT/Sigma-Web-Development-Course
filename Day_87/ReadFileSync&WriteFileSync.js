let File_System = require('fs')
console.log("Firstly I Am Going To Demonstrate 'readfile' & 'writefile' And Then I Am Going To Demonstrate 'readfilesync' & 'writefilesync' Accordingly To Show The Difference Between These Two.")
File_System.readFileSync("File.txt", "utf8", (error, File_data) => {
    if (error != undefined) {
        console.log("The Following Error Arose While Reading The File " + error)
    }
    console.log("So The Data From The File Is " + File_data)
})
console.log("This Is A Line Printing Just After Reading The File Means We Are Intentionally Awating This Line To Be Printed Until The Reading Is Being Done By The Computer Processor.")
console.log("Now It's Time To Write Something In That Same File.")
File_System.writeFileSync("File.txt", "This Is The New Data Pushed By The 'writefilesync' Function Or Method From 'fs' Module", () => {
    console.log("Written Successfully In The File.")
})
console.log("This Is A Line Printing Just After Reading The File Means We Are Intentionally Awating This Line To Be Printed Until The WWriting Is Being Done By The Computer Processor.")