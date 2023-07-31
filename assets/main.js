let cart = document.querySelector(".shopping-cart");

let menu = document.querySelector(".navbar-list");

let btn = document.querySelector(".toggle");


document.querySelector("#shopping-btn").onclick = () => {
  cart.classList.toggle("active");
  menu.classList.remove("active");
};

document.querySelector("#menu-btn").onclick = () => {
  menu.classList.toggle("active");
  cart.classList.remove("active");
};

window.onscroll = () => {
  cart.classList.remove("active");
  menu.classList.remove("active");
};



