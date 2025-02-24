const skillsButton = document.getElementById("skills-button");
const mobileNav = document.getElementsById("mobile-nav");

// opens the contact page
function handleClick(){
    window.location.href = "./contacts.html"; //opens the contact page
}
//handles the menu-icon
function handleMenu(){
   mobileNav.onclick.display("nav");
}
//Downloads the CV
function handleDownloadCV(){
    window.open("https://drive.google.com/file/d/1ph_CxWu0U7REWDBmeyQc6nDV4dz3wDoZ/view?usp=drive_link", "_blank");
}
//By click of the button, It takes you to the skills section
function handleSkillsButton(){
    skillsButton.scrollIntoView({ behavior: "smooth"});
}
// opens the projects page when you click the projects button
function handleProjectsButton(){
    window.location.href="./projects.html";
}
//opens my github account
function handleGithub(){
    window.open("https://github.com/Josephinemwende", "_blank");
}
//opens my linkedIn page
function handleLinkedIn(){
    window.open("https://www.linkedin.com/in/josephine-mwenswa/", "_blank");
}
//opens the gmail page
function handleGmail(){
    window.open("https://mail.google.com/", "_blank");
}
//go backs to the homepage
function goBackHome(){
    window.location.href = "./index.html";
}