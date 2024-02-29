// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')




// TODO: Create an array of questions for user input
function promptUser() {
    return inquirer.prompt([
     
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type:'input',
            name:'description',
            message:'Give a brief description of your project'
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the installation instructions?'
        },
        {
            type:'input',
            name:'usage',
            message:'What is the purpose of this project?'
        },
        {
            type:'input',
            name:'contribution',
            message:'Any contribution guidelines?'
        },
        {
            type:'input',
            name:'test',
            message:'Test Instructions?'
        },
        {
            type: 'checkbox',
            message: 'What license was used for this project',
            name: 'license',
            choices: [
                {
                name:'MIT',
                value: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
                }, 
                {
                  name:'Apache-2.0',
                  value: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
                },  
                {
                 name:'IBM',
                 value:`[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
                },
                 
            ]},
       
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username?'
        },
        {
            type:'input',
            name:'email',
            message: 'What is your email?'
        }
        

    ]);
}

// TODO: Create a function to write README file
// writes data to the readme file, logs error if theres an error, if no erros logs generated answers to
function writeToFile(README, data) {
    fs.writeFile(README, data, (err) => {
        if (err) {
            console.error(`Error ${README}: ${err}`);
        } else {
            console.log(`Generated answers to ${README}`);
        }
    });
}
// generates readme content from user response and returns results with answers provided by user
function generateReadme(answers) {
    return generateMarkdown(answers);
}

// TODO: Create a function to initialize app
async function init() {
    try {
        // prompts user for input
        const answers = await promptUser();

        // generates readme content
        const readmeContent = generateReadme(answers);

        // prompted questions are written onto the readme file
        writeToFile('README.md', readmeContent);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Function call to initialize app
init();