//checking os in our pc
const os = require('os');
console.log(os.platform());

//checking our directory name
console.log(os.homedir());

//File system
//write file

const fs = require('fs');
fs.writeFile('krishtxt', 'this is a data from nodejs', function (err) {
    if (err) throw err
    console.log("file succesfuly completed")
})

//checking in which folder and will show all packages

const path = require('path');
fs.readdir(__dirname, function (err, files) {
    if (err) throw err;
    console.log(files);
});

//Third Party Package 

const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
  res.send("<h1> Krish says hello from nodejs </h1>");
});

app.get('/Home', function (req, res) {
    res.send("<h1> Krish says hello from Home </h1>");
  });

//serverside rendering 
app.get('/service', function (req, res) {
    res.json({
      "Name":"Krish"
    })
  });
 
app.listen(3000);

//chrck whether package in current directory

const pj = 'package.json';

// Check if the file exists in the current directory.
fs.access(pj, fs.constants.F_OK, (err) => {
  console.log(`${pj} ${err ? 'does not exist' : 'exists'}`);
});


