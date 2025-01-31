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



/* ------------------------------------------
----------- BEFORE & AFTER IMAGES -----------
------------------------------------------ */

const b4AfContainers = document.querySelectorAll('.b4AftContainer');

b4AfContainers.forEach(b4AfContainer => {
  b4AfContainer.querySelector('.slider').addEventListener('input', (e) => {
    b4AfContainer.style.setProperty('--position', `${e.target.value}%`);
  })
})



/* ------------------------------------------
------------ AUTOMATIC CAROUSEL -------------
---------------- for headers -------------- */


const carouselItems = document.querySelectorAll(".carouselItem");

//It will be used to shift the items  by incrementing its value every 2 seconds and multiplying it by 100
let i = 1;

// Running the condition every 2 seconds using setInterval
setInterval(() => {
  // Accessing All the carousel Items
  Array.from(carouselItems).forEach((item, index) => {
    /*Checking if the value of i is less than the number of carousel items,
    if it is true, move all the carousel items 100% towards left*/
    if (i < carouselItems.length) {
      item.style.transform = `translateX(-${i * 100}%)`;
    }
  });

  /*If the the value of i is less than the number of Carousel items, then increment the value of i by 1.
  Otherwise set the value of i to 0 if it becomes greater han the number of carousel items*/
  if (i < carouselItems.length) {
    i++;
  } else {
    i = 0;
  }
}, 8000);


/* ------------------------------------------
------------ AUTOMATIC CAROUSEL -------------
--------------- for portfolio ------------ */




/* ------------------------------------------
-------------- CV MODAL POP-UP --------------
------------------------------------------ */

//Get the Modal
var modal = document.getElementById("cvModal");

//Get the link or button to open Modal
var modalLink = document.getElementById("modalLink");

//Get the modal close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

//On Click, open the Modal 
modalLink.onclick = function() {
  modal.style.display = "block";
}

//On Click, close the Modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

//Click anywhere outside of the modal, close Modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}