// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}`;
 
 
}
 // Generate markdown for the top required portions of the README
 let draftMarkdown = 
 `# ${userResponses.title}
 ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
 
 Check out the badges hosted by [shields.io](https://shields.io/).
 
 
 ## Description 
 
 *The what, why, and how:* 
 
 ${userResponses.description}
 `
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
    
    ${userResponses.contributing}`
    };
    
module.exports = generateMarkdown;
