const inquirer = require("inquirer");
const fs = require ("fs");
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

// function to initialize program
async function init () {
    const answers = await inquirer.prompt(questions)
    .then((answers) =>{
        console.log(answers);
        const htmlString = generateMarkdown(answers);

        writeToFile(answers.name + ".md", htmlString);
});
console.log(questions.range(5));
}


// function call to initialize program
init();
