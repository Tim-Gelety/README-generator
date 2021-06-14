// TODO: Include packages needed for this application
const fs = require ('fs')
const inquirer = require ('inquirer')
// TODO: Create an array of questions for user input
const questions = 
inquirer
.prompt([
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
])
.then((answers) => {
  
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile('README.md', data, function(err){
  if (err) {
    return console.log(err);
  }

  console.log("Done!");
})

}

// TODO: Create a function to initialize app
function init() {


}

// Function call to initialize app
init();
