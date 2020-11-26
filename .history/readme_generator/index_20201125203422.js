const inquirer = require("inquirer");
const fs = require ("fs");
const open = require('open');
const util = require ("util");
const generateMarkdown = require ('./generateMarkdown'); 
const writeAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {message:"What is your name?",
    name: "name"},
    {message:"What is your project name?",
    name: "title"},
    {message:"Describe your project.",
    name: "description"},
    {message:"Provide installation instructions",
    name: "installation"},
    {message:"Usage",
    name: "usage"},
    {message:"Provide contributing quidelines",
    name: "contribution"},
    {message:"Provide test instructions",
    name: "test"}
];

// function to write README file
async function writeToFile (fileName,data) {
    await writeAsync (fileName,data);
        }
      
        console.log("Success! Your README.md file has been generated")
   
}
// function to initialize program
async function init() {
    try {

        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you for your responses! Fetching your GitHub data next...");
    
        // Call GitHub api for user info
        const userInfo = await api.getUser(userResponses);
        console.log("Your GitHub user info: ", userInfo);
    
        // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        console.log("Generating your README next...")
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);
    
        // Write markdown to file
        await writeFileAsync('ExampleREADME.md', markdown);

    } 
    catch (error) {
        console.log(error);
    }
};


// function call to initialize program
init();
