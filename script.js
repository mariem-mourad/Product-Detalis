// Change main image when thumbnail is clicked
const thumbnails = document.querySelectorAll(".thumbnails img");
const mainImage = document.querySelector(".product-image img");

thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", function () {
        mainImage.src = this.src;
    });
});

// Handle add to cart
document.querySelector(".add-to-bag").addEventListener("click", function () {
    alert("Product added to cart!");
});

// Handle add to wishlist
document.querySelector(".add-to-wishlist").addEventListener("click", function () {
    alert("Product added to wishlist!");
});


document.addEventListener("DOMContentLoaded", function () {
const quantityInput = document.getElementById("quantityInput");
const decreaseBtn = document.querySelector(".decrease");
const increaseBtn = document.querySelector(".increase");

decreaseBtn.addEventListener("click",function () {
    let currentValue = parseInt(quantityInput.value) || 1;
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});

increaseBtn.addEventListener("click",function () {
    let currentValue = parseInt(quantityInput.value) || 1;
    quantityInput.value = currentValue + 1;
});
});
