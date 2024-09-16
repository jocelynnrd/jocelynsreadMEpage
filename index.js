const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        type: "input",
        //type of question
        name: "title",
        // answer 1
        message: "what is the title of your project?"
        //question
    },
    {
        type: "input",
        //type of question
        message: "what is the description?",
        //question
        name: "description",
        // answer 3
       
    },
    {
        type: "input",
        //type of question
        message: "how do i install this?",
        //question
        name: "installation",
        // answer 4
       
    },
    {
        type: "input",
        //type of question
        message: "how do you want to use my app?",
        //question
        name: "usagegl",
        // answer 5
    
    },
    {
        type: "input",
        //type of question
        message: "how would you like to contribute to my project",
        //question
        name: "contributing",
        // answer 6
    
    },
    {
        type: "input",
        //type of question
        message: "how do you test this application",
        //question
        name: "testing",
        // answer 7
    
    },
    {
        type: "input",
        //type of question
        message: "how do i run this app?",
        //question
        name: "running",
        // answer 8
    
    },
    {
        type: "input",
        //type of question
        message: "what is your git hub username?",
        //question
        name: "username",
        // answer 9
    
    }
   

];

   

function start() {
inquirer.prompt(questions).then((answers) => {
    console.log(answers.title)
    console.log(answers.description)
    console.log(answers.installation)
    console.log(answers.usagegl)
    console.log(answers.contributing)
    console.log(answers.testing)
    console.log(answers.running)
    console.log(answers.username)

    const finalDocument = `

# ${answers.title}

## description 
${answers.description}

## installation
${answers.installation}

## usagegl
${answers.usagegl}

## contributing
${answers.contributing}

## testing
${answers.testing}

## running
${answers.running}

## username
${answers.username}



    `;
fs.writeFileSync("MY-README.MD", finalDocument);
    
}
)
}
start();

