const skillsButton = document.getElementById("skills-button");

function handleClick(){
    window.location.href = "./contacts.html"; //opens the contact page
}
function handleDownloadCV(){
    window.open("https://drive.google.com/file/d/1ph_CxWu0U7REWDBmeyQc6nDV4dz3wDoZ/view?usp=drive_link", "_blank");
}
function handleSkillsButton(){
    skillsButton.scrollIntoView({ behavior: "smooth"});
}
// opens the projects page when you click the projects button
function handleProjectsButton(){
    window.location.href="./projects.html";
}

function handleGithub(){
    window.open("https://github.com/Josephinemwende", "_blank");
}
function handleLinkedIn(){
    window.open("https://www.linkedin.com/in/josephine-mwenswa/", "_blank");
}
function handleGmail(){
    window.open("https://mail.google.com/", "_blank");
}
function goBackHome(){
    window.location.href = "./index.html";
}