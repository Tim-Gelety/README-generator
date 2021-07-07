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
      {
        type: 'input',
        name: 'description',
        message: 'Describe this project'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the intended use of this application?'
      },
]


// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
  fs.writeFile('README.md', answers, function(err){
    // ERROR CONTROl
    if (err) {
      return console.log(err);
    }
    // pass the answers into the readme somehow
    console.log(
      answers
      )
    console.log("Done!");
  })
  
}

// TODO: Create a function to initialize app
function init() {
  
  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  }).then(writeToFile);

}

// Function call to initialize app
init();
