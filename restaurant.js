// ==========================================
// FoodieHub Restaurant Page
// restaurant.js
// ==========================================

// ---------- Elements ----------

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

const favouriteBtn = document.querySelector(".favorite");

const addButtons = document.querySelectorAll(".menu-info button");

const categoryButtons = document.querySelectorAll(".categories button");


// ==========================================
// Tabs
// ==========================================

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(btn => btn.classList.remove("active"));

        contents.forEach(section => {

            section.classList.remove("active");

        });

        tab.classList.add("active");

        const target = tab.dataset.target;

        document
            .getElementById(target)
            .classList.add("active");

    });

});


// ==========================================
// Favourite Button
// ==========================================

favouriteBtn.addEventListener("click", () => {

    favouriteBtn.classList.toggle("active");

    const icon = favouriteBtn.querySelector("i");

    if (favouriteBtn.classList.contains("active")) {

        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");

    }

    else {

        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");

    }

});


// ==========================================
// Add To Cart
// ==========================================

// ==========================================
// Add To Cart
// ==========================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

addButtons.forEach(button => {

    button.addEventListener("click", function () {

        const card = this.closest(".menu-card");

        const name = card.querySelector("h3").innerText;

        const price = parseInt(
            card.querySelector("h4").innerText.replace("₹", "")
        );

        const image = card.querySelector("img").src;

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

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(name + " added to cart.");

    });

});

// ==========================================
// Categories
// ==========================================

categoryButtons.forEach(category => {

    category.addEventListener("click", () => {

        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        category.classList.add("active");

        alert(category.innerText + " selected.");

    });

});


// ==========================================
// Scroll Animation
// ==========================================

const cards = document.querySelectorAll(
".menu-card,.review-card"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

});

cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(50px)";

    card.style.transition=".6s";

    observer.observe(card);

});


// ==========================================
// Navbar Shadow
// ==========================================

window.addEventListener("scroll",()=>{

    const navbar=document.querySelector(".navbar");

    if(window.scrollY>80){

        navbar.style.boxShadow=
        "0 8px 20px rgba(0,0,0,.15)";

    }

    else{

        navbar.style.boxShadow="none";

    }

});


// ==========================================
// Back Button Hover
// ==========================================

const backBtn=document.querySelector(".back-btn");

backBtn.addEventListener("mouseenter",()=>{

    backBtn.style.transform="translateX(-5px)";

});

backBtn.addEventListener("mouseleave",()=>{

    backBtn.style.transform="translateX(0px)";

});


// ==========================================
// Restaurant Loaded
// ==========================================

window.addEventListener("load",()=>{

    console.log("Restaurant Page Loaded");

});


// ==========================================
// Button Ripple Effect
// ==========================================

const buttons=document.querySelectorAll("button");

buttons.forEach(btn=>{

    btn.addEventListener("click",function(e){

        const circle=document.createElement("span");

        const x=e.clientX-this.offsetLeft;

        const y=e.clientY-this.offsetTop;

        circle.style.left=x+"px";
        circle.style.top=y+"px";

        circle.classList.add("ripple");

        this.appendChild(circle);

        setTimeout(()=>{

            circle.remove();

        },500);

    });

});