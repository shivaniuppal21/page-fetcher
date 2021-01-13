const request = require('request');
const fs = require('fs');
var myArgs = process.argv.slice(2);

console.log(myArgs)
let url = myArgs[0]
let path = myArgs[1]

request(url, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  if (!error){
    fs.writeFile(path, body,(err)=> {
        if (!err){
            console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${path}`)
        }
        else{
            console.log("error while writing to file" + err)
        }
    })
  }
  else{
      console.log("error while http req" + error)
  }
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
});
