const fs = (require('fs'));

function readFileContent(Filepath) {
  fs.readFile(Filepath,'utf-8',(err,data)=>{
    if (err) {
      console.log(err);
    }
    else{
      console.log("File Content :\n" +data);
    }
  });
}
readFileContent("text1.txt");
