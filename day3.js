const { exec } = require("child_process");

function executeCommand(command) {
  try {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Command failed with error: ${error.message}`);
        console.error(`Error output: ${stderr}`);
      } else {
        console.log(`Command Output:`);
        console.log(stdout);
      }
    });
  } catch (error) {
    console.error(`Error executing command: ${error.message}`);
  }
}

executeCommand("ls -la");
executeCommand('echo "Hello, Node.js!"');
