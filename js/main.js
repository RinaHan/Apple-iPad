// Cart
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
// When clicking on a window, hide the dropdown
window.addEventListener("click", hideBasket);

function showBasket() {
  basketEl.classList.add("show");
}
function hideBasket() {
  basketEl.classList.remove("show");
}

// Search
const headerEl = document.querySelector("header");
const searchWrapEl = headerEl.querySelector(".search-wrap");
const searchStarterEl = headerEl.querySelector(".search-starter");
const searchCloserEl = searchWrapEl.querySelector(".search-closer");
const searchShadowEl = searchWrapEl.querySelector(".shadow");

searchStarterEl.addEventListener("click", showSearch);
searchCloserEl.addEventListener("click", hideSearch);
searchShadowEl.addEventListener("click", hideSearch);

function showSearch() {
  headerEl.classList.add("searching");
  document.documentElement.classList.add("fixed");
}
function hideSearch() {
  headerEl.classList.remove("searching");
  document.documentElement.classList.remove("fixed");
}
