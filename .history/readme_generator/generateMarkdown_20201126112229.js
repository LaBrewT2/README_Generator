// function to generate markdown for README
function generateMarkdown(data){
    return `# ${data.title}
    #### Welcome to ${data.name}'s page!`

 // Generate Table of Contents conditionally based on userResponses
 `## Table of Contents 
 * [Installation](#installation)
 * [Usage](#usage)
 * [Contributing] (#contributing)
 * [Tests](#tests)
 * [License](#license)
 * [Questions](#questions)
`

 // Generate markdown for the top required portions of the README

 
 ${userResponses.description}
 `

 // Add Table of Contents to markdown
 draftMarkdown += draftToC;

 // Add License section since License is required to Table of Contents
 draftMarkdown += `
 * [License](#license)`;
 

 // Optional Installation section
 if (userResponses.installation !== '') {
 
 draftMarkdown +=
 `
 
 ## Installation
 
 *Steps required to install project and how to get the development environment running:*
 
 ${userResponses.installation}`
 };
 

 // Optional Usage section
 if (userResponses.usage !== '') {
 
 draftMarkdown +=
 
 `
 
 ## Usage 
 
 *Instructions and examples for use:*
 
 ${userResponses.usage}`
 };
 
 
 // Optional Contributing section
 if (userResponses.contributing !== '') {
 `
 
 ## Contributing
 
 *If you would like to contribute it, you can follow these guidelines for how to do so.*
 
 ${userResponses.contributing}
 };
 
 ## Tests
 
 *Tests for application and how to run them:*
 
 ${userResponses.tests}
 };


 // License section is required
 
 ## License
 
 ${userResponses.license}
 

 ---
 
 ## Questions?

 }

module.exports = generateMarkdown;
