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

function processFiles(filePathes) {
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
}

module.exports = {
  readFileAsync,
  writeFileAsync,
  processFiles,
};
