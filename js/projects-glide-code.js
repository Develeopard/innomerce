/* new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    // autoplay: 3000,
}).mount(); */

new Glide('.choose-glide', {
    type: 'carousel',
    perView: 3,
    autoplay: 3000,
    breakpoints:{
        760:{
            perView: 2
        },

        520:{
            perView: 1
        }

    }
}).mount();
