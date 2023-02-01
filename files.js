const fs = require("fs");
// Reading files
fs.readFile("./blog.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

console.log("Last Line");
// Write files
fs.writeFile("./blog.txt", "Names List", () => {
  console.log("File Written");
});

// Directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder Created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder Deleted");
  });
}

// Deleting files
if (fs.existsSync("./blog2.txt")) {
  fs.unlinkSync("./blog2.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File Deleted");
  });
}
