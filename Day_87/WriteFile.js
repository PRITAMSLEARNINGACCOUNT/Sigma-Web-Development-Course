let File_System = require('fs')
File_System.writeFile("File.txt", "This Is The New Data Pushed By The 'writefile' Function Or Method From 'fs' Module", () => {
    console.log("Written Successfully In The File.")
})
console.log("This Is A Line Which Supposed To Printed After The Complete Execution Of 'writefile' Function.But This Line Is Printing Before The Execution Of 'writefile' Method Or Function Because NodeJs Works According To Asynchronus Non-Blocking I/O Model Which States That Anything Can Not Be Awaited By Input/Output.So NodeJs Is Printing This Line Before The Execution Of 'writefile' Function From 'fs' Module Because NodeJs Is Not Awating This Line While The Data Is Being Written To The File By The Computer Processor.")