// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}`;
   // Generate Table of Contents conditionally based on userResponses
   let draftToC = `## Table of Contents`;

   if (userResponses.installation !== '') { draftToC += `
   * [Installation](#installation)` };
 
   if (userResponses.usage !== '') { draftToC += `
   * [Usage](#usage)` };
 
   if (userResponses.contributing !== '') { draftToC += `
   * [Contributing](#contributing)` };
 
   if (userResponses.tests !== '') { draftToC += `
   * [Tests](#tests)` };
 
 
}

module.exports = generateMarkdown;
