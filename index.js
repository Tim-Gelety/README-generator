// TODO: Include packages needed for this application
const fs = require ('fs')
const inquirer = require ('inquirer')
// TODO: Create an array of questions for user input

const questions = 
[
    {
        type: 'input',
        name: 'project',
        message: 'What is the project title?'
      },
      
]


const userArr = []
// TODO: Create a function to write README file
function writeToFile(userArr) {
  fs.writeFile('README.md', userArr, function(err){
    // ERROR CONTROl
    if (err) {
      return console.log(err);
    }
    // pass the answers into the readme somehow
   
    console.log("Done!");
  })
  
}

// TODO: Create a function to initialize app
function init() {
  
  inquirer.prompt(questions).then((answers) => {
    // template literal goes here
    return `#${answers.project}`
  }).then(writeToFile);

}

// Function call to initialize app
init();
