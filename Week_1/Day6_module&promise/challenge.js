const fs = require("fs");

function readFileAsync(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, "utf8", (error, data) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(data); // Resolve with file content as string
    });
  });
}

function writeFileAsync(filePath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, (error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve();
    });
  });
}

// filePathToWrite = "./test.text";
// // write in the file
// const contentToWrite = " the first file";
// writeFileAsync(filePathToWrite, contentToWrite)
//   .then(() => {
//     console.log("File write operation completed successfully.");
//   })
//   .catch((error) => {
//     console.error("Error writing to file:", error);
//  })

const filePathToRead = "./test.text";
// read  the file
readFileAsync(filePathToRead)
  .then((data) => {
    console.log("File contents:", data);
  })
  .catch((err) => {
    console.error("file not found reading file:", err);
  });

//create a function that reead multi files 
 function processFiles(filePathes){
  const promises = filePathes.map((filePath) => {
    return readFileAsync(filePath)
      .then((data) => {
        console.log(`File contents of ${filePath}:`, data);
      })
      .catch((error) => {
        console.error(`Error reading ${filePath}:`, error);
        return data;
      });
  });

  // return Promise.all(promises);
}

// const filePathsToRead = ["./test.text", "./test2.text", "./test3.text"];

// processFiles(filePathsToRead)
//   .then(() => {
//     console.log("All files have been processed successfully.");
//   })
//   .catch((error) => {
//     console.error("Error processing files:", error);
//   });

// create a function that display timestamp of a file
  function addTimestamp(content) {
    const timestamp = new Date().toISOString();
    return `${timestamp} - ${content}`;
  }
  
  const filePath = "./test.text";
  
  fs.readFile(filePath, "utf8", (error, data) => {
    if (error) {
      console.error(`Error reading ${filePath}:`, error);
      return;
    }
  ////  dispaly the add timestamp
  //   const transformedContent = addTimestamp(data);
  //   console.log(`File contents of ${filePath}:`, transformedContent);
   
  // });

  //   reversing the content of the files
  // const reversedContent = data.split("").reverse().join("");
  // const transformedContent = addTimestamp(reversedContent);
  // console.log(`Reversed file contents of ${filePath}:`, transformedContent);
  const uppercaseContent = data.toUpperCase();
  const transformedContent = addTimestamp(uppercaseContent);
    console.log(`Uppercase file contents of ${filePath}:`, transformedContent);
});

