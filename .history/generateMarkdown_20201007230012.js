// function to generate markdown for README
function generateMarkdown(data, userResponses, userInfo){
  return `# ${data.title}`;
}
 // Generate markdown for the top required portions of the README
 let draftMarkdown = 
 `# ${userResponses.title}
 ## Description 
 
 *The what, why, and how:* 
 
 ${userResponses.description}
 `
  
    // License section is required
    draftMarkdown +=
    `
    
    ## License
    
    ${userResponses.license}
    `;
  
  
    // Questions / About Developer section
    let draftDev = 
    `
    ---
    
    ## Questions?
    
    ![Developer Profile Picture](${userInfo.avatar_url}) 
    
    For any questions, please contact me with the information below:
   
    GitHub: [@${userInfo.login}](${userInfo.url})
    `;
  
    // If GitHub email is not null, add to Developer section
    if (userInfo.email !== null) {
    
    draftDev +=
    `
    Email: ${userInfo.email}
    `};
  
    // Add developer section to markdown
    draftMarkdown += draftDev;
  
    // Return markdown
    return draftMarkdown;
    
    
    
module.exports = generateMarkdown;
