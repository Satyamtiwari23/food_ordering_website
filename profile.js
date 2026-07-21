
// =========================================
// FoodieHub Profile
// =========================================

// Profile Elements

const profileName = document.querySelector(".profile-card h1");
const profileEmail = document.querySelectorAll(".profile-card p")[0];
const profilePhone = document.querySelectorAll(".profile-card p")[1];
const profileImage = document.querySelector(".profile-image img");


// =========================================
// Load Saved Profile
// =========================================

window.onload = function(){

    if(localStorage.getItem("userName")){

        profileName.innerText =
        localStorage.getItem("userName");

    }

    if(localStorage.getItem("userEmail")){

        profileEmail.innerHTML =
        '<i class="fa-solid fa-envelope"></i> ' +
        localStorage.getItem("userEmail");

    }

    if(localStorage.getItem("userPhone")){

        profilePhone.innerHTML =
        '<i class="fa-solid fa-phone"></i> ' +
        localStorage.getItem("userPhone");

    }

    if(localStorage.getItem("profileImage")){

        profileImage.src =
        localStorage.getItem("profileImage");

    }

};


// =========================================
// Edit Profile
// =========================================

document.querySelector(".edit-btn").addEventListener("click",function(){

    let newName =
    prompt("Enter Your Name",profileName.innerText);

    if(newName==null) return;

    let newEmail =
    prompt("Enter Email",
    profileEmail.innerText);

    if(newEmail==null) return;

    let newPhone =
    prompt("Enter Phone Number",
    profilePhone.innerText);

    if(newPhone==null) return;

    profileName.innerText = newName;

    profileEmail.innerHTML =
    '<i class="fa-solid fa-envelope"></i> ' + newEmail;

    profilePhone.innerHTML =
    '<i class="fa-solid fa-phone"></i> ' + newPhone;

    localStorage.setItem("userName",newName);
    localStorage.setItem("userEmail",newEmail);
    localStorage.setItem("userPhone",newPhone);

    alert("Profile Updated Successfully.");

});


// =========================================
// Change Profile Picture
// =========================================

document.querySelector(".camera-btn").addEventListener("click",function(){

    let input = document.createElement("input");

    input.type = "file";

    input.accept = "image/*";

    input.click();

    input.onchange = function(){

        let file = input.files[0];

        if(!file) return;

        let reader = new FileReader();

        reader.onload = function(e){

            profileImage.src = e.target.result;

            localStorage.setItem(
                "profileImage",
                e.target.result
            );

        }

        reader.readAsDataURL(file);

    }

});


// =========================================
// Notification
// =========================================

document.querySelector(".fa-bell").addEventListener("click",function(){

    alert("No New Notifications");

});


// =========================================
// Settings
// =========================================

const settings =
document.querySelectorAll(".setting-card");

settings.forEach(function(card){

    card.addEventListener("click",function(){

        let option =
        card.querySelector("span").innerText;

        alert(option + " feature coming soon.");

    });

});


// =========================================
// Add Address
// =========================================

document.querySelector(".add-address").addEventListener("click",function(){

    alert("Add Address Feature Coming Soon.");

});


// =========================================
// Reorder Buttons
// =========================================

const reorderButtons =
document.querySelectorAll(".order-right button");

reorderButtons.forEach(function(button){

    button.addEventListener("click",function(){

        alert("Item Added To Cart.");

    });

});


// =========================================
// Favourite Restaurant Buttons
// =========================================

const restaurantButtons =
document.querySelectorAll(".favorite-card button");

restaurantButtons.forEach(function(button){

    button.addEventListener("click",function(){

        alert("Opening Restaurant...");

    });

});


// =========================================
// Upgrade Membership
// =========================================

document.querySelector(".membership-card button")
.addEventListener("click",function(){

    alert("Premium Membership Coming Soon.");

});


// =========================================
// Logout
// =========================================

document.querySelector(".logout-btn")
.addEventListener("click",function(){

    let logout =
    confirm("Are you sure you want to Logout?");

    if(logout){

        alert("Logged Out Successfully.");

        window.location.href="index.html";

    }

});