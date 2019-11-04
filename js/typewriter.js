//typewrighter vars
let servicesHl = document.querySelector('#services-hl');

//Typewrighter code for services
let servicesTypewriter = new Typewriter(servicesHl, {
    loop: false,
    delay: 75,
});

servicesTypewriter
    .pauseFor(300)
    .typeString('awesome')
    .pauseFor(1000)
    .deleteChars(7)
    .typeString('stunning')
    .pauseFor(1000)
    .deleteChars(8)
    .typeString('beautiful')
    .pauseFor(1000)
    .start();


