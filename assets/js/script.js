gsap.registerPlugin(ScrollTrigger);
if(document.querySelector('.write')){
    var typing = new Typed(".write", {
        strings: [" ",`"\Welcome to <br><span class="rs">RS</span>&nbsp;naturals\"`],
        typeSpeed: 60,
        backSpeed: 100,
        // loop: true,
        showCursor: false
    });
}
gsap.from('.brandd', {
    duration: 3,
    y: '-100px',
    ease: 'elastic'
})
gsap.from('.navbar-button,.navigation-links', {
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
        trigger: ".worker",
        scrub:1,
        start: 'top bottom ',
        end:'center 70%',
        duration:1
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
        scrub:1,
    },
});
var tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".imagepin2",
        start: "top 100%",
        end: 'top 70%',
        scrub:1
    },
});
var tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".pack1",
        start: 'top bottom ',
        end:'center 70%',
        scrub:1
    },
});
var tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: ".pack2",
        scrub:1,
        start: 'center bottom ',
        end:'center 70%'
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
tl2.fromTo('.worker',{
    x: '-200px',
    opacity: '0.5'
}, {
    x: '20px',
    opacity: '1',
    ease: 'linear',
    duration: '0.5'
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
tl6.fromTo('.pack1', {
    x: '-200px',
    opacity: '0'
}, {
    x: '0px',
    opacity: '1',
    ease: 'linear',
    duration: '1'
});
tl7.fromTo('.pack2', {
    x: '200px',
    opacity: '0',
}, {
    x: '0px',
    opacity: '1',
    ease: 'linear',
    duration: '1'
});

tl1.fromTo('.our-products,.text2', {
    y: '20',
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



//why
var whytobox=document.querySelectorAll('.whytobox');
whytobox.forEach((value) => {
    value.addEventListener('click',()=>{
        value.style.transform="scale(0.95)";
        value.style.transition=' transform 100ms';
    })
})



//add to cart


//account details

submit()
  function submit(){
    var display_none=document.querySelector('.account-login');
    if(localStorage.getItem("username")){
        setTimeout(()=>{
        display_none.innerHTML=
        `<div class="user_details d-flex flex-column align-items-center justify-content-center">
        <div class="detail1">
        <i class="fa-solid fa-user p-5" style="color: #a9a9a9;background-color: white;border-radius: 50%;font-size:30px;"></i>
        </div>
        <h5 class="detail2">${localStorage.getItem("username")}</h5>
        <h5 class="detail3">${localStorage.getItem("useremail")}</h5>
        <button class="btn-warning border-0 rounded-pill px-3 py-2 logout-btn" onclick="logout()"><b>LOGOUT</b></button>
        </div>`;
    },500)
}
else{
    display_none.innerHTML=
    `
    <form onsubmit="submitted()">
    <div class="account-input d-flex flex-column justify-content-center align-items-center">
    <input type="text" class="user_name" placeholder="User Name" id="uname" required>
    <input type="email" class="user_email" placeholder="Email" id="email" required>
    <input type="password" class="user_password" placeholder="Password" id="password" required>
    <button class="btn btn-success"  >LOGIN</button>
    </div>
    </form>
    
    `;
    
} 
}
function submitted(){
      
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    var uname=document.getElementById("uname");
    var userName=uname.value;
    var userEmail=email.value;
    var userPassword=password.value;
    localStorage.setItem("username",userName);
    localStorage.setItem("useremail",userEmail);
    localStorage.setItem("userpassword",userPassword);
    submit();
    }
 
function logout(){
    const data_array=["username","useremail","userpassword"];
    data_array.forEach((item)=>{
        localStorage.removeItem(item);
    })
    window.location.reload();
    submit();
}

//lazy loader
function handleIntersection(entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            const lazyImage = entry.target;
            lazyImage.src = lazyImage.getAttribute('data-src');
            observer.unobserve(lazyImage);
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
});

const lazyImages = document.querySelectorAll('img');
lazyImages.forEach(function (lazyImage) {
    observer.observe(lazyImage);
});
  
