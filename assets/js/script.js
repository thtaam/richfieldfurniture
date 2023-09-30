// Click reponsive navigation
const openNavMobile = document.getElementById("mobile");
const closeNavIcon = document.getElementById("closeNavIcon");
const closeNavSpace = document.getElementById("closeNavSpace");

function myFunction(){
    if (openNavMobile.className === "mobile") {
        openNavMobile.className += " reponsive";
    } else {
        openNavMobile.className = "mobile";
    }
}

if (closeNavIcon) {
    closeNavIcon.addEventListener('click', () => {
        openNavMobile.classList.remove("reponsive");
    })
} 

if (closeNavSpace) {
    closeNavSpace.addEventListener('click', () => {
        openNavMobile.classList.remove("reponsive");
    })
}

// Click cart shopping
const openShopCart = document.getElementById("openCart");
const closeShopCart = document.getElementById("shoppingcart-close");
const shoppingCart = document.getElementsByClassName("shoppingcart");
if (openShopCart) {
    openShopCart.addEventListener('click', () => {
        shoppingCart[0].classList.add("active");
    })
}

if (closeShopCart) {
    closeShopCart.addEventListener('click', () => {
        shoppingCart[0].classList.remove("active");
    })
}

// click drop down product shop menu
const dropDownMenuSubOffice = document.getElementById("dropDownMenuSub_Office");
const showMenuSub = document.getElementsByClassName("menu_item_sub");

if (dropDownMenuSubOffice) {
    dropDownMenuSubOffice.addEventListener('click', () => {
        if (showMenuSub[0].classList.contains("dropDownMenuShop") == true) {
            showMenuSub[0].classList.remove("dropDownMenuShop");
        } else {
            showMenuSub[0].classList.add("dropDownMenuShop");
        }
    })
}

// View Details
function viewDetails() {
    window.location.href = "productdetail.html";
}