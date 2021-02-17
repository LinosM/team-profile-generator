const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");

// JS file that generates the contents of the HTML file
const addhtml = require('./src/addhtml');

// Contains the constructors for all classes
const team = require('./lib/team');

// Global variable used to console log to the user how many members are created
var memberCount = 0;

// First prompt to enter manager info
function runManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `Enter manager name`
        },
        {
            type: 'input',
            name: 'id',
            message: `Enter employee ID`
        },
        {
            type: 'input',
            name: 'email',
            message: `Enter email address`
        },
        {
            type: 'input',
            name: 'officeNum',
            message: `Enter office number`
        },
    ]).then(x => {
        memberCount++;
        addManager(x);
    });
}

// Adds manager info to html
function addManager(response) {
    addhtml.addTeamHtml(new team.Manager(response.name, response.id, response.email, response.officeNum));
    runEmployee();
}

// Prompts for additional Engineers/Interns, will keep looping until user selects 'finish'
function runEmployee() {
    console.log(`Number of team members: ${memberCount}`)
    inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: `Add new employee or finish team`,
            choices: [
                'Engineer',
                'Intern',
                '--Finish'
            ]
        }
        ])
        .then(x => {
            // Asks user to enter team name when finalizing
            if (x.type === '--Finish') {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'teamName',
                        message: `Enter team name`
                    }
                ])
                .then(x => {
                    exportFile(x.teamName);
                })
            } else if (x.type === 'Engineer') {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: `Enter the engineer's name`
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: `Enter employee ID`
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: `Enter email address`
                    },
                    {
                        type: 'input',
                        name: 'git',
                        message: `Enter GitHub username`
                    },
                ])
                .then(x => {
                    addEmployee(x, 'engineer');
                })
            } else if (x.type === 'Intern') {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: `Enter the intern's name`
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: `Enter employee ID`
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: `Enter email address`
                    },
                    {
                        type: 'input',
                        name: 'school',
                        message: `Enter intern's school`
                    }
                ])
                .then(x => {
                    addEmployee(x, 'intern');
                })
            }
        });
}

// Adds engineer/intern info to html
function addEmployee(response, type) {
    if (type === 'engineer') {
        addhtml.addTeamHtml(new team.Engineer(response.name, response.id, response.email, response.git));
    } else if (type === 'intern') {
        addhtml.addTeamHtml(new team.Intern(response.name, response.id, response.email, response.school));
    }

    memberCount++;
    runEmployee();
}

// Generates the final html file
function exportFile(teamName) {
    // Checks if folder exists and makes one if it does not
    if (!fs.existsSync('./dist')) {
        fs.mkdirSync(path.join(__dirname, 'dist'), (err) => { 
            if (err) { 
                return console.error(err); 
            } 
        });
    }

    fs.writeFile('./dist/index.html', addhtml.finalizeHtml(teamName), (err) =>
    err ? console.error(err) : console.log('Team page html generated inside dist folder'));
}

runManager();