// ===============================
// FoodieHub JavaScript
// ===============================
// Search Functionality

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", searchFood);

searchInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        searchFood();
    }
});

function searchFood(){

    const value = searchInput.value.toLowerCase().trim();

    if(value === ""){
        alert("Please enter a food or restaurant name.");
        return;
    }

    const dishes = document.querySelectorAll(".dish-card");
    const restaurants = document.querySelectorAll(".restaurant-card");

    let found = false;

    dishes.forEach(dish=>{

        const name = dish.querySelector("h3").textContent.toLowerCase();

        if(name.includes(value)){
            dish.scrollIntoView({
                behavior:"smooth",
                block:"center"
            });

            dish.style.border="3px solid #ff6b00";

            setTimeout(()=>{
                dish.style.border="none";
            },2000);

            found=true;
        }

    });

    restaurants.forEach(res=>{

        const name = res.querySelector("h3").textContent.toLowerCase();

        if(name.includes(value)){

            res.scrollIntoView({
                behavior:"smooth",
                block:"center"
            });

            res.style.border="3px solid #ff6b00";

            setTimeout(()=>{
                res.style.border="none";
            },2000);

            found=true;
        }

    });

    if(!found){
        alert("No matching food or restaurant found.");
    }

}

// =======================================
// Smooth Navigation
// =======================================

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// =======================================
// Add To Cart
// =======================================


// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Cart Count
const cartCount = document.getElementById("cartCount");

// Update Cart Count
function updateCartCount() {
    cartCount.innerText = cart.reduce((total, item) => total + item.quantity, 0);
}

// Show count when page loads
updateCartCount();

// Add To Cart
document.querySelectorAll(".dish-card button").forEach(button => {

    button.addEventListener("click", function () {

        const card = this.parentElement;

        const name = card.querySelector("h3").innerText;

        const price = Number(
            card.querySelector(".price").innerText.replace("₹", "")
        );

        const image = card.querySelector("img").src;

        // Check if item already exists
        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {

            existingItem.quantity++;

        } else {

            cart.push({
                name: name,
                price: price,
                image: image,
                quantity: 1
            });

        }

        // Save to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Update Count
        updateCartCount();

        alert(name + " added to cart.");

    });

});

// =======================================
// Location Change
// =======================================

const locationSelect=document.querySelector(".location select");

locationSelect.addEventListener("change",function(){

    alert("Delivery Location : "+this.value);

});


// =======================================
// Active Navigation
// =======================================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        if(pageYOffset>=sectionTop){
            current=section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// =======================================
// Welcome Message
// =======================================

window.addEventListener("load",()=>{

    console.log("Welcome to FoodieHub");

});

// =======================================
// Scroll to Top Button
// =======================================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#ff6b00";
topBtn.style.color="white";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// =======================================
// Offer Animation
// =======================================

const offers=document.querySelectorAll(".offer-box");

offers.forEach(offer=>{

    offer.addEventListener("mouseenter",()=>{

        offer.style.transform="scale(1.05)";

    });

    offer.addEventListener("mouseleave",()=>{

        offer.style.transform="scale(1)";

    });

});