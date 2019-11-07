//VARIABLES

//slide variables
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

//navigation variables
let menuButton = document.querySelector('.menu-button');
let menu = document.querySelector('.menu');
let hamburger = document.querySelector('.hamburger');

menuButton.addEventListener('click', ()=>{
    menu.classList.toggle('menu-open');
    hamburger.classList.toggle('exex');
    
})


$(function(){
    const $gallery = $('.portfolio-images a').simpleLightbox();
});


$('.projects-hero').mousemove(function(e){
    let moveX = (e.pageX * -1 / 15);
    let moveY = (e.pageY * -1 / 15);
    $('.tool-1').css('background-position', moveX + 'px ' + moveY + 'px')
    $('.tool-2').css('background-position', moveX + 'px ' + moveY + 'px')
    // $('.tool-3').css('background-position', moveX + 'px ' + moveY + 'px')
    // $('.tool-4').css('background-position', moveX + 'px ' + moveY + 'px')
  })
///// glide code

new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    // autoplay: 3000,
}).mount();

/* new Glide('.choose-glide', {
    type: 'carousel',
    perView: 1,
    autoplay: 3000,
}).mount(); */

////////////// COUNTER (home-page)
var a = 0;
$(window).scroll(function() {
    
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
            var $this = $(this),
            countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
            
            {
                
                duration: 3000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                    // alert('finished');
                }
                
            });
        });
        a = 1;
    }
});




//HAPPY SLIDER CODE
const nextSlide = () => {
    //Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current')
    //Check for next slide
    if(current.nextElementSibling){
        //Add current to next sibling
        current.nextElementSibling.classList.add('current');
    }else{
        //Add current to start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
    //Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current')
    //Check for prev slide
    if(current.previousElementSibling){
        //Add current to previous sibling
        current.previousElementSibling.classList.add('current');
    }else{
        //Add current to last
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

//Button events
next.addEventListener('click', e => {
    nextSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

//Auto slide
if(auto){
    //Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}

////////map code
function initMap(){
    let options = {
        zoom: 8,
        center: {lat: 42.3610, lng:-71.0589}
    };
    
    let map = new google.maps.Map(document.getElementById('map'), options);
}


///