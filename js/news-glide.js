new Glide('.news-glide', {
    type: 'carousel',
    perView: 3,
    autoplay: 3000,
    gap: 20,
    breakpoints:{
        960:{
            perView: 2
        },

        620:{
            perView: 1
        }

    }
}).mount();