let newsTw = document.querySelector('#news-tw');


//Typewrighter code for news
let newsTypewriter = new Typewriter(newsTw, {
    loop: true,
    delay: 75,
});

newsTypewriter
    .pauseFor(300)
    .typeString('ILLUSTRATORS')
    .pauseFor(3000)
    .deleteChars(12)
    .typeString('WRITERS')
    .pauseFor(3000)
    .deleteChars(7)
    .typeString('DESIGNERS')
    .pauseFor(3000)
    .deleteChars(9)
    .typeString('TOP CODERS')
    .pauseFor(3000)
    .deleteChars(10)
    .typeString('CEO KINGS')
    .pauseFor(3000)
    .deleteChars(9)
    .start();