/* ------------------------------------------
----------- RESPONSIVE HEADER BAR -----------
--------- adds background on scroll -------*/

$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 380) {
          $("header").addClass("headerActive");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $("header").removeClass("headerActive");
      }
  });
});


/* ------------------------------------------
-------- RESPONSIVE MOBILE NAVIGATION -------
------------------------------------------ */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const mobHeader = document.querySelector("header");

hamburger.addEventListener("click", () => {

  /* Toggle active class */
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  mobHeader.classList.toggle("headerNav");

  /* Toggle aria-expanded value */
  let menuOpen = navMenu.classList.contains("active");
  console.log(menuOpen)
  let newMenuOpenStatus = menuOpen;
  hamburger.setAttribute("aria-expanded", newMenuOpenStatus);
})

// close mobile menu & remove active styling
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  mobHeader.classList.remove("headerNav");
}))