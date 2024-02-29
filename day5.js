const path = require('path');

function checkFileExtension(filePath, expectedExtension) {
  const actualExtension = path.extname(filePath);

  if (actualExtension === expectedExtension) {
    console.log('File has the expected extension:', expectedExtension);
  } else {
    console.log(
      'File does not have the expected extension. Expected:',
      expectedExtension,
      'Actual:',
      actualExtension
    );
  }
}

// Test Cases
checkFileExtension("Filet.txt", "txt");
checkFileExtension('image.png', "jpg");
