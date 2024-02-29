const path = require("path");

function resolvePath(relativePath) {
  const absolutePath = path.resolve(relativePath);

  console.log("Resolved Path:", absolutePath);
}

resolvePath("test-files/file.txt");
resolvePath("nonexistent-folder/file.txt");
