//=============== Menu Js Code==========

const openMenuButton = document.getElementById("openMenu");
const menuList = document.getElementById("menuList");
openMenuButton.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});
//=============== Menu Js Code==========

// Select the dropdown button and menu for both mobile and PC views
const dropdownBtnMobile = document.querySelector(".dropdownBtn-mobile");
const dropdownMenuMobile = document.querySelector(".dropdownMenu-mobile");
const dropdownBtnPC = document.querySelector(".dropdownBtn");
const dropdownMenuPC = document.querySelector(".dropdownMenu");

function toggleDropdown(dropdownMenu, dropdownBtn) {
  dropdownMenu.classList.toggle("hidden");
  // Close the dropdown when clicking outside of it
  window.addEventListener("click", (event) => {
    if (
      !dropdownMenu.contains(event.target) &&
      !dropdownBtn.contains(event.target)
    ) {
      dropdownMenu.classList.add("hidden");
    }
  });
}

// Use click event for desktop and touchstart event for mobile
dropdownBtnPC.addEventListener("click", () => {
  toggleDropdown(dropdownMenuPC, dropdownBtnPC);
});
dropdownBtnMobile.addEventListener("click", () => {
  toggleDropdown(dropdownMenuMobile, dropdownBtnMobile);
});
dropdownBtnMobile.addEventListener("touchstart", () => {
  toggleDropdown(dropdownMenuMobile, dropdownBtnMobile);
});
// Select the dropdown button and menu for both mobile and PC views

//Increment and decrement fields
//initialize value
let count = 0;
//Select the element with id
let IncrementBtn = document.getElementById("incrementBtn");
let decrementBtn = document.getElementById("decrementBtn");
let fieldText = document.getElementById("fieldText");
let priceField = document.getElementById("price-amount");

IncrementBtn.addEventListener("click", () => {
  fieldText.innerText = ++count;
  priceField.innerText = count * 5;
});

decrementBtn.addEventListener("click", () => {
  if (count <= 0) {
    alert("Negative value not allowed!");
  } else {
    fieldText.innerText = --count;
  }
  if (count <= 0) {
    priceField.innerText = 0;
  } else {
    priceField.innerText = priceField.innerText - 5;
  }
});
//Increment and decrement fields
