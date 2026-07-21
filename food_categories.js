// ==========================================
// FoodieHub Category Page JavaScript
// ==========================================

// Get Cart from Local Storage

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ==========================================
// Cart Count
// ==========================================

const cartCount = document.getElementById("cartCount");

function updateCartCount(){

    if(cartCount){

        const total = cart.reduce((sum,item)=>{

            return sum + item.quantity;

        },0);

        cartCount.innerText = total;

    }

}

updateCartCount();

// ==========================================
// Favourite Button
// ==========================================

const favouriteIcons=document.querySelectorAll(".title i");

favouriteIcons.forEach(icon=>{

    icon.addEventListener("click",function(e){

        e.stopPropagation();

        if(this.classList.contains("fa-regular")){

            this.classList.remove("fa-regular");
            this.classList.add("fa-solid");

            this.style.color="#ff3d3d";

        }

        else{

            this.classList.remove("fa-solid");
            this.classList.add("fa-regular");

            this.style.color="#bdbdbd";

        }

    });

});

// ==========================================
// Add To Cart
// ==========================================

const cartButtons=document.querySelectorAll(".menu-info button");

cartButtons.forEach(button=>{

    button.addEventListener("click",function(){

        const card=this.closest(".menu-card");

        const name=card.querySelector("h3").innerText;

        const price=Number(

            card.querySelector("h4")
                .innerText
                .replace("₹","")

        );

        const image=card.querySelector("img").src;

        const existingItem=cart.find(item=>item.name===name);

        if(existingItem){

            existingItem.quantity++;

        }

        else{

            cart.push({

                name:name,
                price:price,
                image:image,
                quantity:1

            });

        }

        localStorage.setItem(

            "cart",
            JSON.stringify(cart)

        );

        updateCartCount();
    });

});
// ==========================================
// Scroll To Top Button
// ==========================================

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.className="scroll-top-btn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#ff6b00";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.boxShadow="0 10px 20px rgba(0,0,0,.2)";
topBtn.style.display="none";
topBtn.style.zIndex="999";
topBtn.style.transition=".3s";

window.addEventListener("scroll",()=>{

    if(window.scrollY>350){

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

// ==========================================
// Fade Animation on Scroll
// ==========================================

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0px)";

        }

    });

},{

    threshold:.15

});

document.querySelectorAll(

".menu-card,.review-card,.delivery-box,.info-card"

).forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(40px)";
    item.style.transition=".6s";

    observer.observe(item);

});

// ==========================================
// Button Click Animation
// ==========================================

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("mousedown",()=>{

        button.style.transform="scale(.95)";

    });

    button.addEventListener("mouseup",()=>{

        button.style.transform="scale(1)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="scale(1)";

    });

});

// ==========================================
// Toast Notification
// ==========================================

const toast=document.createElement("div");

toast.className="toast-message";

toast.style.position="fixed";
toast.style.top="25px";
toast.style.right="25px";
toast.style.padding="15px 25px";
toast.style.background="#28a745";
toast.style.color="#fff";
toast.style.borderRadius="10px";
toast.style.fontWeight="600";
toast.style.boxShadow="0 10px 20px rgba(0,0,0,.2)";
toast.style.display="none";
toast.style.zIndex="9999";

document.body.appendChild(toast);

function showToast(message){

    toast.innerText=message;

    toast.style.display="block";

    setTimeout(()=>{

        toast.style.display="none";

    },2000);

}

// ==========================================
// Replace Add To Cart Success
// ==========================================

cartButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        showToast("Item added to cart successfully!");

    });

});

// ==========================================
// Welcome Message
// ==========================================

window.addEventListener("load",()=>{

    console.log("Welcome to FoodieHub Category Page");

});