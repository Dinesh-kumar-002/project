var typing = new Typed(".write", {
    strings: ["", " \"RS Naturals Spices: Where Purity, Aroma, and Taste Converge for Unforgettable Meals\"", "\"Flavoring Life's Adventures: RS Naturals - Your Partner in Pure and Authentic Spices\"", " \"RS Naturals Spices: Where Purity, Aroma, and Taste Converge for Unforgettable Meals\"", " \"Savor the Genuine Taste of Nature: RS Naturals - Crafting Remarkable Spice Blends\""],
    typeSpeed: 100,
    backSpeed: 10,
    loop: true,
    showCursor: false
});


gsap.from('.branding', {
    duration: 3,
    y: '-100px',
    ease: 'elastic'
})
gsap.from('.navbar-button', {
    duration: 3,
    y: '-100px',
    ease: 'elastic'
})

var tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".our-products",
        start: "top 80%",
        end: "bottom 10%",
        toggleActions: "play none none reset",
        // markers: true,
    },
});
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".card",
        start: "top 80%",
        end: "bottom 10%",
        scrub: true,
        scrub: 1
        // toggleActions: "play none none reset"
    },
});
var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".why-choose",
        start: "top 80%",
        end: "bottom 10%",
        scrub: true,
        scrub: 1
    },
});
var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".imagepin",
        start: "top 80%",
        end: 'top 20%',
        // toggleActions: "play none none reset"
        scrub:1,
        // markers: true,
    },
});
var tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".imagepin2",
        start: "top 90%",
        end: 'top 0%',
        // toggleActions: "play none none reset"
        scrub:1
    },
});
tl4.fromTo('.imagepin',{
    y: '100px',
    opacity: '0'
}, {
    y: '0px',
    opacity: '1',
    ease: 'bounce',
    start: 'top top',
    end: 'bottom bottom',
    duration: '1'
});
tl5.fromTo('.imagepin2', {
    y: '100px',
    opacity: '0'
}, {
    y: '0px',
    opacity: '1',
    ease: 'bounce',
    start: 'top top',
    end: 'bottom bottom',
    duration: '2'
});

tl1.fromTo('.our-products', {
    y: '100%',
    opacity: '0'
}, {
    duration: 2,
    y: '-10%',
    opacity: '1',
    ease: 'elastic',
    start: 'top center',
    end: 'bottom center'
});
tl3.fromTo('.why-choose', {
    y: '-100px',
    opacity: '0'
}, {
    duration: 1.5,
    y: '0px',
    opacity: '1',
    ease: 'elastic',
    start: 'top center',
    end: 'bottom center'
});
// tl2.fromTo('.card', {
//     y: '40%',
//     opacity: '0'
// }, {
//     duration: '5',
//     y: '0%',
//     opacity: '1',
//     ease: 'elastic',
//     start: 'top center',
//     end: 'bottom center',
//     ease: 'elastic'
// })




window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    var win = document.querySelector('.main');
    if (document.documentElement.scrollTop > 150) {
        win.style.backgroundColor = "black"
    } else {
        win.style.backgroundColor = "transparent"
    }
}

var offcanvas_body = document.querySelector('.offcanvas-body');
var close = document.querySelector('.close');
var open = document.querySelector('.open');
var list_items = document.querySelectorAll('.list-items');
open.addEventListener('click', () => {
    list_items.forEach((child) => {
        child.classList.add("actived");
    })
})
close.addEventListener('click', () => {
    list_items.forEach((child) => {
        child.classList.remove("actived");
    })
})


// preloader

window.addEventListener('load', () => {
    let preloader = document.querySelector('.preloader');
    let body = document.querySelector('body');
    preloader.style.zIndex = '0';
    preloader.style.opacity = '0';
    body.style.overflow = 'visible';
    preloader.style.transition = 'opacity 1s';
})




  mySplitText = new SplitText(".para1", { type: "words,chars"})
  chars = mySplitText.chars;

gsap.set(".para1", { perspective: 400 });


