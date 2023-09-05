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

function continueshop(){
    document.querySelector('.text-reset1').click();
}

