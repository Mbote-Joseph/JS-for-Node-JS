const fs = require("fs");

const readstream = fs.createReadStream("./blogs3.txt");
const writeStream = fs.createWriteStream("./blogs4.txt");

// readstream.on("data", (chunk) => {
//   console.log("======NEW CHUNK======");
//   console.log(chunk.toString());
//   writeStream.write("\n======NEW CHUNK =====\n");
//   writeStream.write(chunk);
// });

// Also the same as :
// Piping

readstream.pipe(writeStream);
