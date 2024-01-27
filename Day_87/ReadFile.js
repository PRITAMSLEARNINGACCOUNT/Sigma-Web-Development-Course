let File_System = require('fs')
console.log("Firstly I Am Going To Demonstrate 'readfile' & 'writefile' And Then I Am Going To Demonstrate 'readfilesync' & 'writefilesync' Accordingly To Show The Difference Between These Two.")
File_System.readFile("File.txt", "utf8", (error, File_data) => {
    if (error != undefined) {
        console.log("The Following Error Arose While Reading The File " + error)
    }
    console.log("So The Data From File Is " + File_data)
})
console.log("This Is A Line Which Supposed To Printed After The Complete Execution Of 'readfile' Function.But This Line Is Printing Before The Execution Of 'readfile' Method Or Function Because NodeJs Works According To Asynchronus Non-Blocking I/O Model Which States That Anything Can Not Be Awaited By Input/Output.So NodeJs Is Printing This Line Before The Execution Of 'readfile' Function From 'fs' Module Because NodeJs Is Not Awating This Line While The File Is Being Read By The Computer Processor.")
console.log("Now It's Time To Write Something In That Same File.")