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


//contact us



//why
var whytobox=document.querySelectorAll('.whytobox');
whytobox.forEach((value) => {
    value.addEventListener('click',()=>{
        value.style.transform="scale(0.95)";
        value.style.transition=' transform 100ms';
    })
})



//add to cart

var local_products=JSON.parse(localStorage.getItem("local_products"))||[];








var realcart = document.querySelector(".realcart");
var p_array = [];
function addtocart(btn) {
  
  var parent = btn.closest(".card");
  var product_image = parent.querySelector(".card-img-top").src || parent.querySelector(".card-img-top2").src || parent.querySelector(".card-img-top1").src;
  var product_name = parent.querySelector(".card-title").innerText;
  var id_value = parent.querySelector("input").value;
  var product_price = parseFloat(
    parent.querySelector(".card-text").textContent.match(/\d+/)
  );
  console.log(btn,product_image, product_name, product_price, id_value);
  addtocartpage(btn,product_image, product_name, product_price, id_value);
}


var item_count = document.querySelector(".items-count");
function addtocartpage(btn,p_image, p_name, p_price, p_id) {
  if (p_array.includes(p_id)) {
    
    btn.classList.add("press-animation-reject")
  setTimeout(() => {
    btn.classList.remove("press-animation-reject")
  }, 200);
    var alerting_already = document.querySelector(".alerting-already");
    alerting_already.style.display = "block";
    setTimeout(() => {
      alerting_already.style.display = "none";
    }, 1000);
    return;
  } else {
    btn.classList.add("press-animation")
  setTimeout(() => {
    btn.classList.remove("press-animation")
  }, 200);
    var alert = document.querySelector(".alerting-add");
    alert.style.display = "block";
    setTimeout(() => {
      alert.style.display = "none";
    }, 1000);
    p_array.push(p_id);
    empty();
    item_count.innerHTML = p_array.length;
    realcart.innerHTML += `
    <div class="products d-flex py-2">
        <div class="product ">
              <img src="${p_image}" alt="" class="cart-image rounded-3">
        </div>
            <div class="nameandquantity d-flex flex-column justify-content-around ms-2">
                <h6 class="text product-name text-dark">${p_name}</h6>
                <p class="text product-id" style="display:none;">${p_id}</p>
                <h6 class="text price-id" style="display:none;">${p_price}</h6>
                    <div class="quantity d-flex align-items-end" >
                          <button class="btn-secondary minus" onclick="minus(this)">-</button>
                          <input type="number" class="input ps-2" value="1" disabled>
                          <button class="btn-secondary add" onclick="add(this)">+</button>
                    </div>
            </div>
            <div class="individual-price d-flex justify-content-end align-items-end px-2 text-dark">
                   ${p_price}
            </div>
            </div>
            
  `;
    totals();
  }
}
function totals() {
  var dummy_amount=document.querySelectorAll('.total-value-plus-delievery');
  var total = 0;
  var totaling = document.querySelectorAll(".individual-price");
  var displaying_total = document.querySelector(".total-value");
  totaling.forEach((value) => {
    total += parseInt(value.textContent);
  });
  displaying_total.textContent = total;
  dummy_amount.forEach((value) => {
    value.textContent=`₹ ${total+50}`
  })
}
empty();
function empty(){
  var hide_checkout=document.querySelector('.total');
  var emptyOrnot=document.querySelector('.emptyOrnot');
  var realcart_showing=document.querySelector('.realcart');
  if(p_array.length<1){
    realcart_showing.classList.add("realcart-showing")
    realcart_showing.classList.remove("realcart-showing")
    hide_checkout.classList.add("emptyed")
    hide_checkout.classList.remove("notemptyed")
    emptyOrnot.classList.add("emptyed");
    emptyOrnot.classList.remove("notemptyed");
  }
  else{
    realcart_showing.classList.remove("realcart-showing")
    realcart_showing.classList.add("realcart-showing")
    hide_checkout.classList.remove("emptyed")
    hide_checkout.classList.add("notemptyed")
    emptyOrnot.classList.remove("emptyed");
    emptyOrnot.classList.add("notemptyed");

  }
}
function minus(btn) {
  if (btn.nextElementSibling.value <= 1) {
    btn.value = 0;
    var summa = btn.closest(".nameandquantity");
    var summa2 = summa.querySelector(".product-id").innerHTML;
    p_array.forEach((element, index) => {
      if (element == summa2) {
        p_array.splice(index, 1);
      }
      item_count.innerHTML = p_array.length;
    });
    empty();
    var alert_delete = document.querySelector(".alerting-delete");
    alert_delete.style.display = "block";
    setTimeout(() => {
      alert_delete.style.display = "none";
    }, 1000);
    btn.closest(".products").remove();
    subtotal(btn, minusbtn);
  } else {
    console.log(p_array);
    var minusbtn = btn.nextElementSibling.value--;
    minusbtn--;
  }
  subtotal(btn, minusbtn);
}
function add(btn) {
  var addbtn = btn.previousElementSibling.value++;
  addbtn++;
  subtotal(btn, addbtn);
  console.log(p_array);
}

function subtotal(btn, val) {
  var subtotal_parent = btn.closest(".products");
  var subtotal_id = parseInt(
    subtotal_parent.querySelector(".price-id").innerText
  );
  var subtotal = subtotal_parent.querySelector(".individual-price");
  subtotal.innerText = subtotal_id * val;
  console.log(subtotal, subtotal_id, btn);
  totals();
}
function heart(heart_paren) {
  if (heart_paren.style.color == "white" || heart_paren.style.color=="") {
    heart_paren.style.color = "red";
    heart_paren.style.backgroundColor = "rgba(255, 255, 255, 0.304)";
  } else {
    heart_paren.style.color = "white";
    heart_paren.style.backgroundColor = "transparent";
  }
}



function continueshop(){
    document.querySelector('.text-reset1').click();
}

submit();

function submit(){
    var display_none=document.querySelector('.account-login');
    var userNameShowing=document.querySelector('.userNameShowing');
    if(localStorage.getItem("username")){
        userNameShowing.innerHTML=`<h4 class="mb-5"><b>hi ${localStorage.getItem("username")}!</b></h4>`;
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
  
