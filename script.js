var typing=new Typed(".write", {
    strings: ["", " \"RS Naturals Spices: Where Purity, Aroma, and Taste Converge for Unforgettable Meals\"", "\"Flavoring Life's Adventures: RS Naturals - Your Partner in Pure and Authentic Spices\""," \"RS Naturals Spices: Where Purity, Aroma, and Taste Converge for Unforgettable Meals\""," \"Savor the Genuine Taste of Nature: RS Naturals - Crafting Remarkable Spice Blends\""],
    typeSpeed: 100,
    backSpeed: 10,
    loop: true,
    showCursor: false  
});


gsap.from('.branding',{duration:2,y:'-150px',ease:'back'})
gsap.from('.navbar-button',{duration:2,y:'-150px',ease:'back'})

// var tl3 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".our-products",
//         start: "top center",
//         end: "bottom bottom",
//         toggleActions: "play none none reset",
//         // markers: true,
//     },
// });
// tl3.fromTo('.our-products',{y:'-50px',opacity:'0'},{duration:2,y:'0px',opacity:'1',ease:'elastic',start:'top center',end:'bottom center',})
var win=document.querySelector('.main');
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ( document.documentElement.scrollTop > 150) {
    win.style.backgroundColor="black"
} else {
    win.style.backgroundColor="transparent"
}
}

var offcanvas_body=document.querySelector('.offcanvas-body');
var close=document.querySelector('.close');
var open=document.querySelector('.open');
var open=document.querySelector('.open');
var list_items=document.querySelectorAll('.list-items');
open.addEventListener('click', ()=>{
    list_items.forEach((child) => {
        child.classList.add("actived");
    })
})
close.addEventListener('click', ()=>{
    list_items.forEach((child) => {
        child.classList.remove("actived");
    })
})


// preloader

window.addEventListener('load',()=>{
    let preloader=document.querySelector('.preloader');
    let body=document.querySelector('body');
    preloader.style.zIndex='0';
    body.style.overflow='visible';
})