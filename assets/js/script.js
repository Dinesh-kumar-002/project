if(document.querySelector('.write')){
    var typing = new Typed(".write", {
        strings: [" ",`"\Welcome to <br><span class="rs">RS</span>&nbsp;naturals\"`],
        typeSpeed: 30,
        backSpeed: 100,
        // loop: true,
        showCursor: false
    });
}
gsap.from('.branding', {
    duration: 3,
    y: '-100px',
    ease: 'elastic'
})
gsap.from('.navbar-button,.fa-user,.fa-opencart', {
    duration: 3,
    y: '-100px',
    ease: 'elastic'
})

var tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".our-products,.text2",
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

tl1.fromTo('.our-products,.text2', {
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



window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
    var win = document.querySelector('.main');
    if (document.documentElement.scrollTop > 5) {
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


//contact us



//why
var delieveryboy=document.querySelector('.delieveryboy');
let options = {
    root: document.querySelector("#scrollArea"),
    rootMargin: "0px",
    threshold: 1.0,
  };
  
  let observer = new IntersectionObserver(callback, options);
  function callback(){

  }