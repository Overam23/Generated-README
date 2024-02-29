// using the checkbox in index.js for license question, the user input image is generated into the ReadMe
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge() {}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}



// TODO: Create a function to generate markdown for README
// function also fills in and generates the table of contents based off of user input
function generateMarkdown(data) {
    return `# ${data.title}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Description
  ${data.description}
  
  ## Installation
  
  ${data.install}
  
  
  ## Usage
  ${data.usage}
  
  ## Contribution
  ${data.contribution}
  
  ## Tests
  
  ${data.test}
  
  
  ## License
  ${data.license.join(' ')}
  
  ## Questions
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
  `;
  }


module.exports = generateMarkdown;