const File_System = require("fs");

File_System.readdir(__dirname, (Error, files) => {
  if (Error == true) {
    console.error("Error reading folder:", Error);
    return;
  }

  // console.log('Files in the folder:');
  files.forEach((file) => {
    if (file.endsWith(".json") || file.endsWith(".js")) {
      // console.log("Won't Be Moving These Files.");
    } else {
      let Splitted_File = file.split(".");
      Splitted_File = Splitted_File[Splitted_File.length - 1];
      // console.log(Splitted_File);
      if (file.includes(".")) {
        File_System.mkdir(__dirname + `/${Splitted_File}`, (Error) => {
          if (Error == true) {
            let str = __dirname + "\\" + file;
            let str_2 = `/${Splitted_File}/${file}`;
            // console.log(str)
            // console.log(str_2)
            File_System.rename(str, str_2, (err) => {
              if (err) {
                console.error("Error moving file:", err);
              } else {
                console.log("File moved successfully");
              }
            });
            // console.error('Error creating folder:', Error);
          } else {
            let str = __dirname + "\\" + file;
            let str_2 = `${__dirname}\\${Splitted_File}\\${file}`;
            // console.log(str)
            // console.log(str_2)
            File_System.rename(str, str_2, (err) => {
              if (err) {
                console.error("Error moving file:", err);
              } else {
                console.log("File moved successfully");
              }
            });
            // console.log('Folder created successfully');
          }
        });
      }
    }
  });
});
