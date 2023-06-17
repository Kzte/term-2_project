function addOrderToCheckout(name, toppings, sauces, bread){
    var containerDiv = document.createElement("div");
    containerDiv.className = "col-md-3 sub";
    
    var image = document.createElement("img");
    image.src = "../assets/5-super-sub-reg.jpg";
    image.alt = "image not loading";
    
    var heading = document.createElement("h3");
    heading.textContent = name;
    
    var paragraph1 = document.createElement("p");
    paragraph1.textContent = 'Bread: ' + bread;
    
    var paragraph2 = document.createElement("p");
    paragraph2.textContent = 'Toppings: ' + toppings;
    
    var paragraph3 = document.createElement("p");
    paragraph3.textContent = 'Sauces: ' + sauces;
    
    containerDiv.appendChild(image);
    containerDiv.appendChild(heading);
    containerDiv.appendChild(paragraph1);
    containerDiv.appendChild(paragraph2);
    containerDiv.appendChild(paragraph3);
    
    var parentElement = document.getElementById("subs-container"); 
    parentElement.appendChild(containerDiv);
    
}



const orders = JSON.parse(localStorage.getItem('order'));

let totalPrice = 0;

function applyCoupon(event){
    event.preventDefault();
    const couponCode = document.getElementById('coupon-code').value;

    if(couponCode == "#SUPERCODE"){
        totalPrice *= 0.90;
    }else{
        alert('Invalid coupon code')
    }

    
    let price = document.getElementById('total');
    price.innerHTML = `Your total is: R${totalPrice}`;
}

if(orders){
    for(let i = 0; i < orders.length; i++){
        addOrderToCheckout(orders[i].name, orders[i].toppings, orders[i].sauces, orders[i].bread);
        totalPrice += orders[i].total;
    }
    let price = document.getElementById('total');
    price.innerHTML = `Your total is: R${totalPrice}`;
}

function placeOrder(){
    console.log(JSON.parse(localStorage.getItem('order')));
}