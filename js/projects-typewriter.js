let projectsTw = document.querySelector('#projects-tw');


//Typewrighter code for projects
let projectsTypewriter = new Typewriter(projectsTw, {
    loop: true,
    delay: 75,
});

projectsTypewriter
    .pauseFor(300)
    .typeString('PROJECTS')
    .pauseFor(3000)
    .deleteChars(8)
    .start();