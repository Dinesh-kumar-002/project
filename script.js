AOS.init();
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);
var typing=new Typed(".write", {
    strings: ["", " \"RS Naturals Spices: Where Purity, Aroma, and Taste Converge for Unforgettable Meals\"", "\"Flavoring Life's Adventures: RS Naturals - Your Partner in Pure and Authentic Spices\""," \"RS Naturals Spices: Where Purity, Aroma, and Taste Converge for Unforgettable Meals\""," \"Savor the Genuine Taste of Nature: RS Naturals - Crafting Remarkable Spice Blends\""],
    typeSpeed: 100,
    backSpeed: 10,
    loop: true,
});
// var win=document.querySelector('.navbar-container');
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if ( document.documentElement.scrollTop > 150) {
//     win.style.backgroundColor="black"
// } else {
//     win.style.backgroundColor="black"
// }
// }
//menu bar 

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