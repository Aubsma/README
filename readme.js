//node modules
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');

inquirer.prompt(
    [
        {
            type: 'input',
            message: 'What is the Title of the project?',
            name: 'title',
            validate: (value)=>{ if(vale){return true} else {return 'I need a Title to continue'}},
        },
        {
            type: 'input',
            message: 'Description of Project:',
            name: 'description',
            validate: (value)=>{ if(vale){return true} else {return 'I need a Description to continue'}},
        },
        {
            type: 'input',
            message: 'Instalation Instructions?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'How To Use this app:',
            name: 'Usage',
            validate: (value)=>{ if(vale){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'Contributors:',
            name: 'Conributors',
            validate: (value)=>{ if(vale){return true} else {return 'I need at least you listed to continue'}},
        },
        {
            type: 'list',
            message: 'What license(s) did you use?',
            name: 'License',
            choices: [ 'The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
            validate: (value)=>{ if(vale){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'Github username:',
            name: 'git',
            validate: (value)=>{ if(vale){return true} else {return 'I need your github to continue'}},
        },        
        {
            type: 'input',
            message: 'E-mail:',
            name: 'email',
            validate: (value)=>{ if(vale){return true} else {return 'I need an email to continue'}},
        } 
        
    ]
).then(({
    title,
    description,
    installation,
    Usage,
    Contributors,
    License,
    git,
    email
})=>{
    const template = ${title}
    [Description](#description)
    [Installation](#installation)
    [Usage](#usage)
    [Credits](#credits)
    [License](#license)
    #Description
    ${description}
    #Installation
    ${installation}
    #Usage
    ${Usage}
    #Contributors
    ${Contributors}
    #License
    ${License}

    #Contact
    Github: ${git}
    Email: ${email};

    createNewFile(title, template);
}
);

function createNewFile(fileName, template){
    fs.writeFile(./${fileName.toLowerCase().split('').join('')}.nd , data,(err) => {
        if(err){
            console.log(err)
        }
        console.log('Your README has been generate!');
    })
}
