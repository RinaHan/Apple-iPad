const basketStarterEl = document.querySelector("header .basket-starter");
const basketEl = basketStarterEl.querySelector(".basket");

// toggle dropdown menu
basketStarterEl.addEventListener("click", function (event) {
  event.stopPropagation();
  // if there is 'show' class
  if (basketEl.classList.contains("show")) {
    //remove 'show' class to hide the dropdown menu
    hideBasket();
  } else {
    // else add 'show' to show the dropdown menu
    showBasket();
  }
});
// When I click on the dropdown, stop event propagation
basketEl.addEventListener("click", function (event) {
  event.stopPropagation();
});
// click anywhere in the window
window.addEventListener("click", function () {
  showBasket;
});

function showBasket() {
  basketEl.classList.add("show");
}
function hideBasket() {
  basketEl.classList.remove("show");
}
