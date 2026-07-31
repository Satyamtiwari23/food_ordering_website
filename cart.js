// =========================================
// FoodieHub Dynamic Cart
// Part 1
// =========================================

// Get cart data from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// function to update cart items 
function updateCartItemCount() {

    const totalItems = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    const cartCount = document.getElementById("cartItemCount");

    if (cartCount) {
        cartCount.innerText =
            totalItems + (totalItems === 1 ? " Item" : " Items");
    }

}


// Charges
const DELIVERY_FEE = 40;
const PLATFORM_FEE = 10;
const GST_RATE = 0.05;

// Cart container
const cartItems = document.getElementById("cartItems");

// -----------------------------
// Display Cart Items
// -----------------------------

function displayCart() {
    updateCartItemCount();
    cartItems.innerHTML = "";

    if(cart.length === 0){
        
        cartItems.innerHTML = `
            <div class="empty-cart">
                <h2>Your Cart is Empty 🛒</h2>
                <p>Add some delicious food.</p>
            </div>
        `;

        updateBill();

        return;
    }

    cart.forEach((item,index)=>{

        cartItems.innerHTML += `

        <div class="cart-card">

            <img src="${item.image}">

            <div class="food-details">

                <h3>${item.name}</h3>

                <h4>₹${item.price}</h4>

            </div>

            <div class="quantity">

                <button class="minus"
                onclick="decreaseQuantity(${index})">

                -

                </button>

                <span class="count">

                ${item.quantity}

                </span>

                <button class="plus"
                onclick="increaseQuantity(${index})">

                +

                </button>

            </div>

            <div class="price">

                ₹${item.price * item.quantity}

            </div>

            <button class="remove"
            onclick="removeItem(${index})">

            <i class="fa-solid fa-trash"></i>

            </button>

        </div>

        `;

    });

    updateBill();

}
// =========================================
// Part 2
// Quantity & Remove
// =========================================

// Increase Quantity
function increaseQuantity(index){

    cart[index].quantity++;

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

// Decrease Quantity
function decreaseQuantity(index){

    if(cart[index].quantity > 1){

        cart[index].quantity--;

    }
    else{

        if(confirm("Remove this item from cart?")){

            cart.splice(index,1);

        }

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

// Remove Item
function removeItem(index){

    if(confirm("Remove this item from cart?")){

        cart.splice(index,1);

        localStorage.setItem("cart", JSON.stringify(cart));

        displayCart();

    }

}
// =========================================
// Part 3
// Bill Calculation
// =========================================

let discount = 0;

function updateBill(){

    let subtotal = 0;

    cart.forEach(item=>{

        subtotal += item.price * item.quantity;

    });

    const gst = subtotal * GST_RATE;

    const grandTotal =
        subtotal + gst + DELIVERY_FEE + PLATFORM_FEE - discount;

    document.getElementById("subtotal").innerText =
        "₹" + subtotal.toFixed(2);

    document.getElementById("gst").innerText =
        "₹" + gst.toFixed(2);

    document.getElementById("discount").innerText =
        "-₹" + discount.toFixed(2);

    document.getElementById("grandTotal").innerText =
        "₹" + grandTotal.toFixed(2);

}
// ==========================
// Start Cart
// ==========================

displayCart();