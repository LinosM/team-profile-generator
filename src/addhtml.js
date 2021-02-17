// Initializes global variable to store each employee html card
var teamHtml = '';

function addTeamHtml(x) {
    
    var roleLine = '';      // Office number/Github/School info depending on role
    var roleIcon = '';      // Sets icon depending on role

    switch(x.role) {
        case 'Manager':
            roleLine = `Office number: ${x.officeNum}`;
            roleIcon = `<i class="fas fa-mug-hot"></i>`;
            break;
        case 'Engineer':
            roleLine = `GitHub: <a href="https://github.com/${x.git}">${x.git}</a>`;
            roleIcon = `<i class="fas fa-glasses"></i>`;
            break;
        case 'Intern':
            roleLine = `School: ${x.school}`;
            roleIcon = `<i class="fas fa-graduation-cap"></i>`;
            break;
        default:
            return;
    }

    // Employee card template
    teamHtml +=
        `<div class="col-sm-4 px-1 my-2">
            <div class="card">
                <div class="card-header">
                    <h3>${x.name}</h3>
                    <h4>${roleIcon} ${x.getRole()}</h4>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${x.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${x.getEmail()}">${x.getEmail()}</a></li>
                        <li class="list-group-item">${roleLine}</li>
                    </ul>
                </div>
            </div>
        </div>
        `
}

// HTML template, employee cards are inserted inside section->row element
function finalizeHtml(teamName) {
    const finalHtml =
`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
    <style>
        h1{
            background-color:rgb(230, 147, 39);
            color: white;
            padding: 20px;
        }

        .card-header{
            background-color: blue;
            color: white;
        }

        .card{
            max-width: 18rem;
            filter: drop-shadow(5px 5px 5px #000000);
        }
    </style>

    <title>Team Profile</title>
  </head>
  <body>
    <h1 class="text-center">${teamName}</h1>

    <section class="container mt-4">
        <div class="row">
            ${teamHtml}
        </div>
    </section>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossorigin="anonymous"></script>
  </body>
</html>`

    return finalHtml;
}

module.exports = {
    addTeamHtml: addTeamHtml,
    finalizeHtml: finalizeHtml
}